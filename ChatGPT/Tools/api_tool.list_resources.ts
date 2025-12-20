/**
 * Tool: api_tool.list_resources
 * 
 * Description:
 * Lists available API resources and tools.
 */

interface ApiToolListResourcesToolInput {
    path?: string;
    cursor?: string | null;
    only_tools?: boolean;
    refetch_tools?: boolean;
}
