/**
 * Tool: functions.lexical-code-search
 * 
 * Description: Use this skill when the prompt is best answered by a lexical code search.
 */

interface LexicalCodeSearchTool {
    query: string; // The query used to perform the search, optimized for lexical code search on the user's behalf.
    scopingQuery?: string; // Specifies the scope of the query (e.g., using `org:`, `repo:`, `path:`, or `language:` qualifiers).
}
