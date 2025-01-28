/**
 * Tool: multi_tool_use.parallel
 * 
 * Description: This tool serves as a wrapper for utilizing multiple tools. Each tool that can be used must be specified in the tool sections. Only tools in the functions namespace are permitted.
 */

interface ParallelInput {
    tool_uses: Array<{
        recipient_name: string; // The name of the tool to use. The format should either be just the name of the tool, or in the format namespace.function_name for plugin and function tools.
        parameters: object; // The parameters to pass to the tool. Ensure these are valid according to the tool's own specifications.
    }>;
};
