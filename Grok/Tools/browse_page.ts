/**
 * Tool: browse_page
 *
 * Description: Use this tool to request content from any website URL. It will fetch the page and process it via the LLM summarizer, which extracts/summarizes based on the provided instructions.
 */
interface BrowsePageToolInput {
    url: string; // The URL of the webpage to browse.
    instructions: string; // The instructions are a custom prompt guiding the summarizer on what to look for. Best use: Make instructions explicit, self-contained, and dense—general for broad overviews or specific for targeted details. This helps chain crawls: If the summary lists next URLs, you can browse those next. Always keep requests focused to avoid vague outputs.
}
