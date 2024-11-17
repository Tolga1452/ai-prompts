/**
 * Tool: functions.get-github-data
 * 
 * Description: This function serves as an interface to use the public GitHub REST API. You MUST prefer specialized functions for more complex queries, such as searching for code in a specific repository. You MUST call the GitHub REST API via a GET request. You MUST use 'is:issue' or 'is:pr' in the query when using the '/search/issues' endpoint. You SHOULD prefer the '/search' endpoint when looking for multiple items. If the user is on a "/tree" page extract the following parameters like "/<owner>/<repo>/tree/<ref>". If a user asks for a diff last n changes use the "/repos/.../compare/" endpoint with a range like "<ref>~n...<ref>". If a user wants to find labels, use '/search/labels?repository_id=<repo ID>...' if repo ID is not empty. Otherwise, use '/repos' to get the repo ID first and then use '/search/labels?repository_id=<repo ID>...'. You CAN plan to make sequential calls to the GitHub API to retrieve more information.
 * 
 * Input:
 */

interface GetGitHubDataInput {
    endpoint: string; // A full valid GitHub REST API endpoint to call via a GET request. Include the leading slash.
    endpointDescription?: string; // A short description of the GitHub API operation. This should be generic, and not mention any particular entities. For example, "get repo" or "search pull requests" or "list releases in repo". Prefer "search" over "list" for issues and pull requests.
    repo: string; // The 'owner/repo' name of the repository that's being used in the endpoint. If this isn't used in the endpoint, send an empty string.
    task?: string; // A phrase describing the task to be accomplished with the GitHub REST API. For example, "search for issues assigned to user monalisa" or "get pull request number 42 in repo facebook/react" or "list releases in repo kubernetes/kubernetes". If the user is asking about data in a particular repo, that repo should be specified.
};

// Output:

type GetGitHubDataOutput = any;
