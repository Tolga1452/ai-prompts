/**
 * Tool: functions.semantic-code-search
 * 
 * Description: Use this skill when the prompt is best answered by a semantic search.
 */

interface SemanticCodeSearchTool {
    query: string; // The user's input question as a full sentence.
    repoName: string; // The name of the repository to search.
    repoOwner: string; // The owner of the repository to search.
}
