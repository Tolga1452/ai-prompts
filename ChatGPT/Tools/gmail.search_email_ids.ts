/**
 * Tool: gmail.search_email_ids
 * 
 * Description: Searches for email messages using either a keyword query or a tag.
 */

interface GmailSearchEmailIdsTool {
    query?: string; // Keyword query to search for emails.
    tags?: string[]; // List of tag filters for emails.
    max_results?: number; // Maximum number of email IDs to retrieve. Defaults to 10.
    next_page_token?: string; // Token from a previous search to fetch the next page.
};
