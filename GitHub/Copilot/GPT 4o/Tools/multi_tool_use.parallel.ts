/**
 * Tool: multi_tool_use.parallel
 * 
 * Description: Use this function to run multiple tools simultaneously, but only if they can operate in parallel. Do this even if the prompt suggests using the tools sequentially.
 * 
 * Input:
 */

interface ParallelInput {
    tool_uses: {
        recipient_name: string; // The name of the tool to use. The format should either be just the name of the tool, or in the format namespace.function_name for plugin and function tools.
        parameters: object; // The parameters to pass to the tool. Ensure these are valid according to the tool's own specifications.
    }[];
};

// Output:

type ParallelOutput = any;
