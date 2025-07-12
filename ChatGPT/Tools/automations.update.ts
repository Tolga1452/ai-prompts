/**
 * Tool: automations.update
 * 
 * Description: Update an existing automation. Use to enable or disable and modify the title, schedule, or prompt of an existing automation.
 */

interface AutomationsUpdateTool {
    jawbone_id: string; // ID of the automation to update
    schedule?: string; // Schedule using the VEVENT format per the iCal standard
    dtstart_offset_json?: string; // Optional offset from the current time to use for the DTSTART property given as JSON encoded arguments to the Python dateutil relativedelta function like {"years": 0, "months": 0, "days": 0, "weeks": 0, "hours": 0, "minutes": 0, "seconds": 0}
    prompt?: string; // User prompt message to be sent when the automation runs
    title?: string; // Title of the automation as a descriptive name
    is_enabled?: boolean; // Setting for whether the automation is enabled
}
