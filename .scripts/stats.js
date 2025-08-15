const fs = require('fs');
const path = require('path');
const cp = require('child_process');

// Resolve repo root assuming this script lives at <root>/.scripts/stats.js
const ROOT = path.resolve(__dirname, '..');

// Exclusions (folder names only, at any depth)
const EXCLUDE_DIRS = new Set([
  '.git',
  'node_modules',
  '.scripts',
  'specials',
  '.vscode',
]);

// File filter
const INCLUDED_EXT = new Set(['.txt']);

// Output file
const OUTPUT_MD = path.join(ROOT, 'STATS.md');

// Repo info for clickable links in the table
const REPO_URL = 'https://github.com/Tolga1452/ai-prompts';
const REPO_BRANCH = 'main';

// -------------------------------------------------------------
// Helpers: FS & path
// -------------------------------------------------------------

function safeReadDir(dir) {
  try {
    return fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }
}

function walk(dir) {
  const results = [];
  const entries = safeReadDir(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      results.push(...walk(full));
    } else if (entry.isFile()) {
      results.push(full);
    }
  }
  return results;
}

function readText(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

// -------------------------------------------------------------
// Helpers: counts & formatting
// -------------------------------------------------------------

function countLines(text) {
  if (!text) return 0;
  return text.split(/\r?\n/).length;
}

function countChars(text) {
  return text.length;
}

function fmt(n) {
  return n.toLocaleString('en-US');
}

function escLabel(s) {
  return s.replace(/"/g, '\\"');
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function escapeMd(s) {
  return s.replace(/\|/g, '\\|');
}

function escapeLinkText(s) {
  // Escape characters that can break link label in tables
  return escapeMd(s).replace(/\]/g, '\\]');
}

function encodePathForUrl(p) {
  // Encode each segment to preserve slashes
  return toPosix(p).split('/').map(encodeURIComponent).join('/');
}

// -------------------------------------------------------------
// Git change detection (new/edited files)
// -------------------------------------------------------------

function runGit(args) {
  try {
    return cp.execSync(`git ${args}`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString();
  } catch {
    return '';
  }
}

function detectGitChanges() {
  // If not a git repo, nothing to mark
  const inside = runGit('rev-parse --is-inside-work-tree').trim();
  if (inside !== 'true') return { addedFiles: new Set(), modifiedFiles: new Set() };

  /** @type {Set<string>} */
  const added = new Set();
  /** @type {Set<string>} */
  const modified = new Set();

  // Working tree and index changes
  const porcelain = runGit('status --porcelain');
  if (porcelain) {
    const lines = porcelain.split(/\r?\n/).filter(Boolean);
    for (const line of lines) {
      const status = line.slice(0, 2);
      let file = line.slice(3).trim();
      // Handle rename format in porcelain: 'R  old -> new'
      const arrow = ' -> ';
      if (file.includes(arrow)) file = file.split(arrow).pop();
      const rel = toPosix(path.relative(ROOT, path.isAbsolute(file) ? file : path.join(ROOT, file)));
      if (!rel.endsWith('.txt')) continue;
      if (status.includes('?') || status.includes('A')) {
        added.add(rel);
        modified.delete(rel);
      } else if (status.includes('M') || status.includes('R') || status.includes('C')) {
        if (!added.has(rel)) modified.add(rel);
      }
    }
  }

  // Aggregate changes across the last N commits (default 10)
  const nEnv = process.env.STATS_COMMITS_LOOKBACK || process.env.COMMITS_LOOKBACK;
  let n = parseInt(nEnv || '10', 10);
  if (!Number.isFinite(n) || n <= 0) n = 10;
  if (n > 100) n = 100; // safety cap

  const hasHead = !!runGit('rev-parse --verify HEAD');
  if (hasHead) {
    const log = runGit(`log --name-status -n ${n} --pretty=format:`);
    if (log) {
      const lines = log.split(/\r?\n/).filter(Boolean);
      for (const line of lines) {
        if (!/^[A-Z]/.test(line)) continue;
        const parts = line.split(/\t/);
        const code = (parts[0] || '').trim();
        if (!code) continue;
        // For renames/copies (e.g., R100, C75), last field is the new path
        const file = parts[parts.length - 1];
        if (!file) continue;
        const rel = toPosix(path.relative(ROOT, path.isAbsolute(file) ? file : path.join(ROOT, file)));
        if (!rel.endsWith('.txt')) continue;
        const c = code[0];
        if (c === 'A') {
          added.add(rel);
          modified.delete(rel);
        } else if (c === 'M' || c === 'R' || c === 'C') {
          if (!added.has(rel)) modified.add(rel);
        }
      }
    }
  } else {
    // No commits yet: mark untracked files as added
    const untracked = runGit('ls-files --others --exclude-standard');
    if (untracked) {
      for (const f of untracked.split(/\r?\n/)) {
        if (!f) continue;
        const rel = toPosix(f.trim());
        if (rel.endsWith('.txt')) added.add(rel);
      }
    }
  }

  return { addedFiles: added, modifiedFiles: modified };
}

// -------------------------------------------------------------
// Charts: Pie (with theme variants) + Text fallback
// -------------------------------------------------------------

function textPieFallback(items, topN) {
  const top = items.slice(0, topN);
  const rest = items.slice(topN);
  const otherSum = rest.reduce((a, b) => a + b.chars, 0);
  const otherFiles = rest.reduce((a, b) => a + b.files, 0);
  const lines = [];
  lines.push('<details open><summary>List</summary>');
  lines.push('');
  lines.push('```text');
  for (const it of top) {
    if (it.chars > 0) lines.push(`${it.name.padEnd(24, ' ')} ${String(it.files).padStart(4, ' ')} prompts   ${fmt(it.chars).padStart(10, ' ')} chars`);
  }
  if (otherSum > 0) lines.push(`${'Other'.padEnd(24, ' ')} ${String(otherFiles).padStart(4, ' ')} prompts   ${fmt(otherSum).padStart(10, ' ')} chars`);
  lines.push('```');
  lines.push('');
  lines.push('</details>');
  return lines.join('\n');
}

function mermaidPie(items, topN, title, mode /* 'light' | 'dark' */) {
  const top = items.slice(0, topN);
  const rest = items.slice(topN);
  const otherSum = rest.reduce((a, b) => a + b.chars, 0);
  const lines = [];
  lines.push('```mermaid');
  const theme = mode === 'dark' ? 'dark' : 'base';
  const darkVars = '"background":"transparent","textColor":"#EAEAEA","primaryTextColor":"#EAEAEA","pieTitleTextColor":"#FFFFFF","pieSectionTextColor":"#EAEAEA"';
  const commonVars = '"fontFamily":"Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif","pieTitleTextSize":"18px","pieSectionTextSize":"12px","pie1":"#4E79A7","pie2":"#F28E2B","pie3":"#E15759","pie4":"#76B7B2","pie5":"#59A14F","pie6":"#EDC948","pie7":"#B07AA1","pie8":"#FF9DA7","pie9":"#9C755F","pie10":"#BAB0AC","pie11":"#86BCB6","pie12":"#F1CE63"';
  const themeVars = mode === 'dark' ? `${darkVars},${commonVars}` : commonVars;
  lines.push(`%%{init: {"theme": "${theme}", "themeVariables": {${themeVars}} } }%%`);
  lines.push(`pie title ${escLabel(title)}`);
  for (const it of top) {
    if (it.chars > 0) lines.push(`  "${escLabel(it.name)} (${fmt(it.chars)})" : ${it.chars}`);
  }
  if (otherSum > 0) lines.push(`  "Other" : ${otherSum}`);
  lines.push('```');
  return lines.join('\n');
}

function pieSection(items, topN, title) {
  const parts = [];
  // Always show a readable text fallback
  parts.push(textPieFallback(items, topN));
  parts.push('');
  // Light theme version
  parts.push('<details><summary>Pie Chart (Light Theme)</summary>');
  parts.push('');
  parts.push(mermaidPie(items, topN, title, 'light'));
  parts.push('');
  parts.push('</details>');
  parts.push('');
  // Dark theme version
  parts.push('<details><summary>Pie Chart (Dark Theme)</summary>');
  parts.push('');
  parts.push(mermaidPie(items, topN, title, 'dark'));
  parts.push('');
  parts.push('</details>');
  return parts.join('\n');
}

// -------------------------------------------------------------
// Charts: Text-based horizontal bars
// -------------------------------------------------------------

function textBarChart(data, title, unit) {
  const items = data.filter(d => d.value > 0);
  if (!items.length) return `**${escapeMd(title)}**\n\n_No data_`;

  // Preprocess labels: split trailing markers (🆕 new, ✨ edited; keep ✏️/✏ legacy) from label to avoid misalignment in monospace rendering
  const processed = items.map(i => {
    const raw = toPosix(i.label);
    // Match a single trailing marker preceded by a space. Handles '✏️' (with VS16) or '✏'.
    const m = raw.match(/^(.*?)(?:\s(🆕|✨|✏️|✏))\s*$/u);
    if (m) {
      return { base: m[1], marker: m[2], value: i.value };
    }
    return { base: raw, marker: '', value: i.value };
  });

  const labelMax = Math.min(60, Math.max(...processed.map(i => i.base.length)));
  const maxVal = Math.max(...processed.map(i => i.value));
  const BAR_MAX = 40; // characters
  const lines = [];
  lines.push(`**${escapeMd(title)}**`);
  lines.push('');
  lines.push('```text');
  for (const { base, marker, value } of processed) {
    const baseTrim = trimLabel(base, labelMax);
    const len = Math.max(1, Math.round((value / maxVal) * BAR_MAX));
    const bar = '█'.repeat(len);
  // Normalize marker for alignment in monospace (map emoji to 1-col ASCII)
  let markerNorm = '';
  if (marker === '🆕') markerNorm = '+'; // new
  else if (marker === '✨' || marker === '✏️' || marker === '✏') markerNorm = '*'; // edited
    // Place marker in a fixed-width 2-char prefix column, then the label padded to labelMax
    const markerPrefix = markerNorm ? `${markerNorm} ` : '  ';
    const labelPadded = baseTrim.padEnd(labelMax, ' ');
    lines.push(`${markerPrefix}${labelPadded} | ${bar} ${fmt(value)} ${unit}`);
  }
  lines.push('```');
  return lines.join('\n');
}

function trimLabel(s, max) {
  if (s.length <= max) return s;
  if (max <= 1) return s.slice(0, max);
  return s.slice(0, max - 1) + '…';
}

// -------------------------------------------------------------
// Table
// -------------------------------------------------------------

function fullLeaderboardTable(fileStats, decorateLabel = (s) => s) {
  const sorted = [...fileStats].sort((a, b) => b.chars - a.chars);
  const rows = [];
  rows.push('| # | Prompt | Category | Characters | Lines |');
  rows.push('|---:|---|---|---:|---:|');
  let rank = 1;
  for (const f of sorted) {
  const label = decorateLabel(f.rel);
  const url = `${REPO_URL}/blob/${REPO_BRANCH}/${encodePathForUrl(f.rel)}`;
  const promptCell = `[${escapeLinkText(label)}](${url})`;
  rows.push(`| ${rank} | ${promptCell} | ${escapeMd(f.topLevel)} | ${fmt(f.chars)} | ${fmt(f.lines)} |`);
    rank++;
  }
  return rows.join('\n');
}

// -------------------------------------------------------------
// Main
// -------------------------------------------------------------

function main() {
  const allFiles = walk(ROOT);
  const txtFiles = allFiles.filter((f) => INCLUDED_EXT.has(path.extname(f).toLowerCase()));

  const fileStats = txtFiles.map((absPath) => {
    const rel = toPosix(path.relative(ROOT, absPath));
    const topLevel = rel.includes('/') ? rel.split('/')[0] : '(root)';
    const content = readText(absPath);
    const chars = countChars(content);
    const lines = countLines(content);
    return { rel, topLevel, chars, lines };
  });

  const byCategory = {};
  for (const f of fileStats) {
    if (!byCategory[f.topLevel]) byCategory[f.topLevel] = { chars: 0, lines: 0, files: 0 };
    byCategory[f.topLevel].chars += f.chars;
    byCategory[f.topLevel].lines += f.lines;
    byCategory[f.topLevel].files += 1;
  }

  const totalFiles = fileStats.length;
  const totalChars = fileStats.reduce((a, b) => a + b.chars, 0);
  const totalLines = fileStats.reduce((a, b) => a + b.lines, 0);

  const topCategories = Object.entries(byCategory)
    .map(([name, s]) => ({ name, ...s }))
    .sort((a, b) => b.chars - a.chars);

  const topFilesByChars = [...fileStats].sort((a, b) => b.chars - a.chars);
  const topFilesByLines = [...fileStats].sort((a, b) => b.lines - a.lines);

  const now = new Date();
  const generatedAt = now.toISOString();

  // Detect changes for label decoration
  const { addedFiles, modifiedFiles } = detectGitChanges();
  const decorate = (rel) => {
    const p = toPosix(rel);
  if (addedFiles.has(p)) return `${p} 🆕`;
  if (modifiedFiles.has(p)) return `${p} ✨`;
    return p;
  };

  const md = [
    '# Prompt Stats',
    '',
    `**Generated:** ${generatedAt}`,
    '',
    '## Summary',
    '',
    `- **Total prompts:** ${fmt(totalFiles)}`,
    `- **Total characters:** ${fmt(totalChars)}`,
    `- **Total lines:** ${fmt(totalLines)}`,
    topCategories.length ? `- **Top category:** ${topCategories[0].name} (${fmt(topCategories[0].chars)} chars in ${fmt(topCategories[0].files)} prompts)` : '- Top category: —',
  '',
  '## Markers',
  '',
  '- 🆕 New Prompt (shown as "+" in bar charts)',
  '- ✨ Recently Updated (shown as "*" in bar charts)',
  '',
  '_Markers appear next to names in lists and charts._',
    '',
    '---',
    '',
    '## Top Categories by Characters',
    '',
    pieSection(topCategories, 12, 'Top Categories by Characters'),
    '',
    '## Top Prompts by Characters',
    '',
  textBarChart(topFilesByChars.slice(0, 25).map(f => ({ label: decorate(f.rel), value: f.chars })), 'Top Prompts by Characters', 'chars'),
    '',
    '## Top Prompts by Lines',
    '',
  textBarChart(topFilesByLines.slice(0, 25).map(f => ({ label: decorate(f.rel), value: f.lines })), 'Top Prompts by Lines', 'lines'),
    '',
    '---',
    '',
    '## Full Prompt List',
    '',
  fullLeaderboardTable(fileStats, decorate)
  ].join('\n');

  fs.writeFileSync(OUTPUT_MD, md, 'utf8');
  console.log(`Wrote ${path.relative(ROOT, OUTPUT_MD)} (${md.length.toLocaleString('en-US')} chars)`);
}

main();

