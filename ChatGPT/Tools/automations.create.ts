/**
 * Tool: automations.create
 * 
 * Description: Create a new automation. Use when the user wants to schedule a prompt for the future or on a recurring schedule.
 */

interface AutomationsCreateTool {
    prompt: string; // User prompt message to be sent when the automation runs
    title: string; // Title of the automation as a descriptive name
    schedule?: string; // Schedule using the VEVENT format per the iCal standard
    dtstart_offset_json?: string; // Optional offset from the current time to use for the DTSTART property given as JSON encoded arguments to the Python dateutil relativedelta function like {"years": 0, "months": 0, "days": 0, "weeks": 0, "hours": 0, "minutes": 0, "seconds": 0}
}
