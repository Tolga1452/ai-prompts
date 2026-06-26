/**
 * Tool: open_page
 *
 * Description: Use this tool to fetch text content from any website URL. Returns the complete page if no line range is specified up to truncation.
 */
interface OpenPageTool {
    url: string; // The URL of the webpage to open.
    start_line?: number | null; // Optional starting line number (1-indexed). If provided, returns content from this line to the end of the page.
}
