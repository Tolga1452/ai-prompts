/**
 * Tool: functions.lexical-code-search
 * 
 * Description: Use this skill when the prompt is best answered by a lexical code search. Lexical code search finds results based on exact word matches or patterns without considering the context or meaning. ONLY USE when the prompt can be answered with an EXACT WORD MATCH. DO NOT USE when the prompt is asking about a concept or idea. You can use the following qualifiers to help scope your search: repo:, org:, user:, language:, path:,symbol: Use symbol:<function_or_class_name> for symbol definitions  Content: Use content:<text> to search for matching text within files. Is: Use is:<property> (ONLY is:archived, is:fork, is:vendored, is:generated) to filter based on repo properties. Boolean operators: OR or NOT to exclude e.g. NOT is:archived Regex: you MUST surround Regex terms with slashes e.g., /^test/.
 * 
 * Input:
 */

interface LexicalCodeSearchInput {
    query: string; // The query used to perform the search. The query should be optimized for lexical code search on the user's behalf, using qualifiers if needed (`content:`, `symbol:`, `is:`, boolean operators (OR, NOT, AND), or regex (MUST be in slashes)).
    scopingQuery: string; // Specifies the scope of the query (e.g., using `org:`, `repo:`, `path:`, or `language:` qualifiers)
};

// Output:

type LexicalCodeSearchOutput = any;
