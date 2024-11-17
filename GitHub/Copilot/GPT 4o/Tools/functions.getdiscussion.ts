/**
 * Tool: functions.getdiscussion
 * 
 * Description: The getdiscussion skill gets a GitHub discussion from a repo by discussionNumber. A user would invoke this by saying get discussion 1, or asking about a discussion in a repo or an organization by number. If the discussion is a repository discussion, only the repo should be provided. If the discussion is an organization discussion, only the owner is required. Returns the title of the Discussion, the number of the Discussion, the contents of the Discussion body, the login of the user who created the Discussion, the Discussion state, the Discussion answer if it exists.
 * 
 * Input:
 */

interface GetDiscussionInput {
    discussionNumber: number; // The number of the discussion.
    owner?: string; // For discussions on the organization level, otherwise known as organization discussions, specify the organization name. e.g. orgs/nodejs or orgs/angular. The repo field should be empty.
    repo?: string; // For discussions associated with a repository, specify the repo name and owner as a owner/name, e.g. microsoft/typescript. If this is an organization discussion, e.g. orgs/angular, this should be empty.
};

// Output:

type GetDiscussionOutput = any;
