/**
 * Tool: functions.search_codebase
 * 
 * Description: Run a natural language search for relevant code or documentation comments from the user's current workspace. Returns relevant code snippets from the user's current workspace if it is large, or the full contents of the workspace if it is small.
 */

interface SearchCodebaseInput {
    query: string; // The query to search the codebase for. Should contain all relevant context. Should ideally be text that might appear in the codebase, such as function names, variable names, or comments.
};
