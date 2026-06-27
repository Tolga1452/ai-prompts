/**
 * Tool: web_fetch
 * 
 * Description: Fetch the contents of a web page at a given URL. Only URLs that already appear in this conversation can be fetched: ones the person provided, or ones returned by a prior web_search or web_fetch. A URL recalled from training or built by editing a seen URL's path will be rejected; call web_search or fetch a linking page instead. This tool cannot access content that requires authentication, such as private Google Docs or pages behind login walls.
 */

interface WebFetchInput {
  url: string; // URL to fetch
  allowed_domains?: string[] | null; // List of allowed domains. If provided, only URLs from these domains will be fetched.
  blocked_domains?: string[] | null; // List of blocked domains. If provided, URLs from these domains will not be fetched.
  html_extraction_method?: string; // The HTML extraction method to use. 'markdown' produces better content extraction than the legacy 'traf' method.
  is_zdr?: boolean; // Whether this is a Zero Data Retention request. When true, the fetcher should not log the URL.
  text_content_token_limit?: number | null; // Truncate text to be included in the context to approximately the given number of tokens. Has no effect on binary content.
  web_fetch_pdf_extract_text?: boolean | null; // If true, extract text from PDFs. Otherwise return raw Base64-encoded bytes.
  web_fetch_rate_limit_dark_launch?: boolean | null; // If true, log rate limit hits but don't block requests (dark launch mode)
  web_fetch_rate_limit_key?: string | null; // Rate limit key for limiting non-cached requests (100/hour). If not specified, no rate limit is applied.
}
