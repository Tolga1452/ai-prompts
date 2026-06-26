/**
 * Tool: open_page_with_find
 *
 * Description: Fetch text content from a website URL. If a regex pattern is provided, returns matching lines with line numbers and surrounding context. If no pattern is provided, returns the full page content.
 */
interface OpenPageWithFindTool {
    url: string; // The URL of the webpage to open.
    pattern?: string | null; // Optional regular expression pattern to search for in the page content. Use standard regex syntax. Search is case-insensitive. If not provided, returns the full page content.
    max_matches?: number; // Maximum number of matches to return. Defaults to 50.
    context_lines?: number; // Number of context lines to show before and after each match. Defaults to 10.
}
