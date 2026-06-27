/**
 * Tool: suggest_connectors
 * 
 * Description: Present connector options to the user. Each option renders with a Connect or Use button, plus a "None of these" option. The user's choice arrives as a follow-up message. Call this when any of the following are true: A relevant option is an MCP App (tools tagged [third_party_mcp_app]) and the user did not explicitly name that company — even if the connector is already connected; The user has no connected tool that can fulfill the request; The user explicitly asks what connectors are available (e.g. "what can help me manage my tasks"); A tool call failed with an auth/credential error — pass the server UUID from the failed tool name mcp__{uuid}__{toolName} so the user can re-authenticate.
 */

interface SuggestConnectorsInput {
  uuids: string[]; // UUIDs of connectors to present. Pass directoryUuid values from search_mcp_registry results — not connector names, not guesses.
}
