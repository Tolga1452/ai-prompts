/**
 * Tool: functions.github-coding-agent
 * 
 * Description: This tool should be used to create a new pull request to make changes to source code to solve a given problem or complete a given task.
 */

interface GithubCodingAgentTool {
    base_ref?: string; // The base branch for the pull request. Optional.
    problem_statement: string; // The problem statement describes the problem or task the coding agent should solve. Required.
    problem_title?: string; // The title of the problem or task. Optional.
    repository: string; // The name and owner of the repository to create the pull request in. Required.
}
