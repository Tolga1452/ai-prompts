/**
 * Tool: browser.open
 * 
 * Description: Opens the link `id` from the page indicated by `cursor` starting at line number `loc`, showing `num_lines` lines.
 */

interface BrowserOpenInput {
    id?: string | number; // URL or link id to open in the browser. Default: -1.
    cursor?: number; // Cursor ID. Default: -1.
    loc?: number; // Line number to start viewing. Default: -1.
    num_lines?: number; // Number of lines to view in the browser. Default: -1.
    line_wrap_width?: number; // Line wrap width in characters. Default (Min): 80. Max: 1024.
    view_source?: boolean; // Whether to view source code of the page. Default: false.
    source?: string; // Browser backend.
};
