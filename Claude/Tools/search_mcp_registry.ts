/**
 * Tool: search_mcp_registry
 * 
 * Description: Search for available connectors in the MCP registry. Call this when connecting to a new MCP might help resolve the user query — whether or not they name a specific product.
 */

interface SearchMcpRegistryInput {
  keywords: string[]; // Keywords to search for in the MCP registry
}
