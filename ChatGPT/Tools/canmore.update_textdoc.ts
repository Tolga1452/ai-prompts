/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates the current textdoc. Never use this function unless a textdoc has already been created.
 */

interface CanmoreUpdateTextdocTool {
    updates: {
        pattern: string; // A valid Python regular expression used with re.finditer.
        multiple: boolean; // Whether to replace multiple matches or just the first one.
        replacement: string; // Replacement string used with re.Match.expand.
    }[];
}
