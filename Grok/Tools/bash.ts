/**
 * Tool: bash
 *
 * Description: Executes a given bash command in a persistent shell session.
 */
interface BashTool {
    command: string; // The command to execute
    timeout?: number; // Timeout in seconds
    background?: boolean; // Run in background. Returns PID and log file path immediately without waiting for completion.
    maxOutputLength?: number; // Maximum amount of characters to return in the output.
}
