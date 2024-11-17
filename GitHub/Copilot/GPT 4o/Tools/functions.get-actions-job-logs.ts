/**
 * Tool: functions.get-actions-job-logs
 * 
 * Description: Gets the log for a specific job in an action run. Can also take a run ID, pull request number, or workflow path to find a failing job. Links to code should use the provided "ref" name. If the user asks why a job failed, you should provide a link to the failing test or the failing code and suggest a fix for the issue identified.
 * 
 * Input:
 */

interface GetActionsJobLogsInput {
    jobId?: number; // The ID of the job inside the run. If a job ID is not available, a workflow run ID or pull request number can be used instead.
    pullRequestNumber?: number; // The number of the pull request for which the job was run. This can be used if a job ID is not available.
    repo: string; // The name and owner of the repo of the run.
    runId?: number; // The ID of the workflow run that contains the job. This can be used if a job ID is not available.
    workflowPath?: string; // The path of the workflow that has failing runs excluding '.github/workflows'. This can be used if a job ID is not available. If you are parsing this from a URL, the path will be found in the last part of the URL. for example: "{repo}/actions/workflows/{workflowPath}". If you are parsing this from a file path path, you should only keep the part after "/workflows/" ie. ".github/workflows/{workflowPath}",
};

// Output:

type GetActionsJobLogsOutput = any;
