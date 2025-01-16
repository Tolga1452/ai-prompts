/**
 * Tool: automations.create
 * 
 * Description: Create a new automation. Use when the user wants to schedule a prompt for the future or on a recurring schedule.
 */

interface AutomationsCreateInput {
    title: string; // Title of the automation as a descriptive name.
    prompt: string; // User prompt message to be sent when the automation runs.
    schedule?: string; // Schedule using the VEVENT format per the iCal standard.
    dtstart_offset_json?: string; // Optional offset from the current time to use for the DTSTART property, given as JSON encoded arguments to the Python dateutil relativedelta function.
};
