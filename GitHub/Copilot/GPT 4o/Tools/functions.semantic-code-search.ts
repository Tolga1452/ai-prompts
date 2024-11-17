/**
 * Tool: functions.semantic-code-search
 * 
 * Description: Performs a semantic search powered by GitHub and returns the lines of code most similar to the query, as well as data about their files. You can use the following qualifiers to help scope your search: repo:, org:, user:, language:, path:. You MUST use the user's original query as the search query. You MUST put a full sentence in the query parameter. DO NOT use anything except a FULL SENTENCE.
 * 
 * Input:
 */

interface SemanticCodeSearchInput {
    query: string; // This parameter should contain the user's input question as a full sentence. It represents the latest raw, unedited message from the user. If the message is long, unclear, or rambling, you may use this parameter to provide a more concise version of the question, but ALWAYS phrase it as a complete sentence.
    scopingQuery: string; // Specifies the scope of the query (e.g., using `org:`, `repo:`, `path:`, or `language:` qualifiers)
};

// Output:

type SemanticCodeSearchOutput = any;
