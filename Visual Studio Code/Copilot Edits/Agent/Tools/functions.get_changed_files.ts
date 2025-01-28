/**
 * Tool: functions.get_changed_files
 * 
 * Description: Get git diffs of file changes in the workspace.
 */

interface GetChangedFilesInput {
    sourceControlState?: Array<"staged" | "unstaged" | "merge-conflicts">; // The kinds of git state to filter by. Allowed values are: 'staged', 'unstaged', and 'merge-conflicts'. If not provided, all states will be included.
    workspacePaths: string[]; // The absolute path(s) to workspace folder(s) to look for changes in.
};
