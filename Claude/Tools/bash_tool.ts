/**
 * Tool: bash_tool
 * 
 * Description: Run a bash command in the container
 */

interface BashToolInput {
  command: string; // Bash command to run in container
  description: string; // Why I'm running this command
}
