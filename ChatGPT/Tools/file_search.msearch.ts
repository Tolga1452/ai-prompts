/**
 * Tool: file_search.msearch
 * 
 * Description: Issues multiple queries to a search over the file(s) uploaded by the user and displays the results. 
 * You can issue up to five queries to the msearch command at a time. However, you should only issue multiple queries 
 * when the user's question needs to be decomposed / rewritten to find different facts. In other scenarios, prefer 
 * providing a single, well-designed query. Avoid short queries that are extremely broad and will return unrelated results.
 * One of the queries MUST be the user's original question, stripped of any extraneous details, e.g. instructions or 
 * unnecessary context. However, you must fill in relevant context from the rest of the conversation to make the question 
 * complete. E.g. "What was their age?" => "What was Kevin's age?" because the preceding conversation makes it clear that 
 * the user is talking about Kevin.
 * Here are some examples of how to use the msearch command:
 * - User: What was the GDP of France and Italy in the 1970s? 
 *   => {"queries": ["What was the GDP of France and Italy in the 1970s?", "france gdp 1970", "italy gdp 1970"]}
 * - User: What does the report say about the GPT4 performance on MMLU? 
 *   => {"queries": ["What does the report say about the GPT4 performance on MMLU?"]}
 * - User: How can I integrate customer relationship management system with third-party email marketing tools? 
 *   => {"queries": ["How can I integrate customer relationship management system with third-party email marketing tools?", "customer management system marketing integration"]}
 * - User: What are the best practices for data security and privacy for our cloud storage services? 
 *   => {"queries": ["What are the best practices for data security and privacy for our cloud storage services?"]}
 * - User: What was the average P/E ratio for APPL in Q4 2023? The P/E ratio is calculated by dividing the market value price per share by the company's earnings per share (EPS).  
 *   => {"queries": ["What was the average P/E ratio for APPL in Q4 2023?"]} // Instructions are removed from the user's question.
 * 
 * REMEMBER: One of the queries MUST be the user's original question, stripped of any extraneous details, but with ambiguous 
 * references resolved using context from the conversation. It MUST be a complete sentence.
 */

interface FileSearchMSearchTool {
  queries?: string[]; // Up to 5 well-formed search queries to find relevant information from the uploaded files. One MUST be the user's full original question with context resolved.
  time_frame_filter?: {
    start_date: string; // Optional ISO date string (e.g., "2023-01-01") to limit search results to a start date.
    end_date: string;   // Optional ISO date string (e.g., "2023-12-31") to limit search results to an end date.
  };
}
