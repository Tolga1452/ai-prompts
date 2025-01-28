/**
 * Tool: functions.grep_search
 * 
 * Description: Do a text search in the workspace. Limited to 20 results. Use this tool when you know the exact string you're searching for.
 */

interface GrepSearchInput {
    includePattern?: string; // Search files matching this glob pattern. Will be applied to the relative path of files within the workspace.
    isRegexp?: boolean; // Whether the pattern is a regex. False by default.
    query: string; // The pattern to search for in files in the workspace. Can be a regex or plain text pattern.
};
