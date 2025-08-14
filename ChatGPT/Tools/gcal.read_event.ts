/**
 * Tool: gcal.read_event
 * 
 * Description: Reads a specific event from Google Calendar by its ID.
 */

interface GcalReadEventTool {
    event_id: string; // The ID of the event to read.
    calendar_id?: string; // Calendar ID, defaults to 'primary'.
};
