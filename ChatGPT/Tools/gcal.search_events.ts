/**
 * Tool: gcal.search_events
 * 
 * Description: Searches for events from a user's Google Calendar within a given time range and/or matching a keyword.
 */

interface GcalSearchEventsTool {
    time_min?: string; // Lower bound (inclusive) for an event's start time in naive ISO 8601 format.
    time_max?: string; // Upper bound (exclusive) for an event's start time in naive ISO 8601 format.
    timezone_str?: string; // IANA time zone string.
    max_results?: number; // Maximum number of events to retrieve.
    query?: string; // Keyword for a free-text search.
    calendar_id?: string; // Calendar ID, defaults to 'primary'.
    next_page_token?: string; // Token for the next page of results.
};
