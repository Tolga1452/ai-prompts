/**
 * Tool: memento
 * 
 * Description: Use this tool to log your progress—such as websites visited, code executed, and other relevant actions—along with their citation IDs. Only summarize what you did in this specific attempt.
 */

interface MementoInput {
    analysis_before_summary?: string; // Internal analysis text prepared before the summary.
    summary: string; // Summary of what has been done in the current attempt, including citations.
};
