/**
 * Tool: functions.file_search
 * 
 * Description: Search for files in the workspace by glob pattern. This only returns the paths of matching files. Limited to 20 results. Glob patterns match from the root of the workspace folder. Examples: **\/*.{js,ts} to match all js/ts files in the workspace. src/** to match all files under the top-level src folder. Use this tool when you know the exact filename pattern of the files you're searching for.
 */

interface FileSearchInput {
    query: string; // Search for files with names or paths matching this query. Can be a glob pattern.
};
