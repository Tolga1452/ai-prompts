/**
 * Tool: multi_tool_use.parallel
 * 
 * Description: Use this function to run multiple tools simultaneously, but only if they can operate in parallel.
 */

interface MultiToolUseParallelTool {
    tool_uses: {
        recipient_name: string; // The name of the tool to use.
        parameters: object; // The parameters to pass to the tool.
    }[];
}
