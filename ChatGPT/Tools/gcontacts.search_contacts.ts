/**
 * Tool: gcontacts.search_contacts
 * 
 * Description: Searches for contacts in the user's Google Contacts.
 */

interface GcontactsSearchContactsTool {
    query: string; // Keyword for a free-text search over contact name, email, etc.
    max_results?: number; // Maximum number of contacts to retrieve. Defaults to 25.
};
