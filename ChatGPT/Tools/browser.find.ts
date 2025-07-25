/**
 * Tool: browser.find
 * 
 * Description: Finds exact matches of `pattern` in the current page, or the page given by `cursor`.
 */

interface BrowserFindInput {
    pattern: string; // Pattern to find in the page.
    cursor?: number; // Cursor ID. Default: -1.
};
