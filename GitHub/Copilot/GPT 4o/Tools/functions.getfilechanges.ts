/**
 * Tool: functions.getfilechanges
 * 
 * Description: The getfilechanges skill get's a changes filtered for a specific file. You MUST NOT use this to get changes for an entire repo or branch. You MUST NOT use this to get a diff. If the user is on a blob url extract parameters from the url http://github.localhost/<repo>/blob/<ref>/<path>. Your response should be formatted exactly like: 1. "The recent changes for [<path>](<link_to_blob_on_ref>) are:". 2. List each commit in the following format: a. Do not include author or date, write: '[<short_sha>](<short_sha_link>): "<message_with_shortened_links>"'. b. Using a maximum of 2 list bullets, write a brief sentence describing the changes excluding the author and date, do not include the full line changes. 3. After the commits write a technical overview in paragraph form without bullets summarizing all the changes using declarative language. Do not include any code snippets in the overview.
 * 
 * Input:
 */

interface GetFileChangesInput {
    max?: number; // Default to 3. The number of previous commits to the file.
    path: string; // The path for the file.
    ref: string; // Default to '' unless specified by the user or inferred from the url http://github.localhost/<repo>/blob/<ref>/<path>. The sha, branch, or tag for the file.
    repo: string; // The name and owner of the repo for the file.
};

// Output:

type GetFileChangesOutput = any;
