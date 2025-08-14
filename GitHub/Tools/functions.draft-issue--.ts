/**
 * Tool: functions.draft-issue--
 * 
 * Description: This tool helps users make new GitHub issues.
 */

interface FunctionsDraftIssueInput {
  /**
   * Query for usernames assigned to the issue. This is optional.
   * - Only determine queried assignees from the chat conversation.
   * - Only include information that the user gives you.
   * - You can query using username, email or full name.
   * - If you can't infer the assignees queries, leave them blank.
   * - Send assignees queries to this tool parameter in order of confidence.
   */
  assignee_queries?: string[];

  /**
   * The description of the issue. Markdown is supported.
   * - Generate the description yourself unless the user explicitly tells you what it should be.
   * - If you generate a description, it must be detailed and actionable.
   * - If you generate a description, use other tools to gather information that would make the description more actionable.
   * - If you generate a description, do not include assignee information in the description text.
   * - Include ALL relevant images uploaded to the chat in the description. You MUST refer to the images using the format ![image1](image1)
   * - Images must be numbered in the reverse order they were uploaded, last image is ![image1](image1), second to last ![image2](image2) etc.
   * - Image numbers must match sequential number in reverse.
   * - Only assign relevant images to appropriate issues, but image numbering is common between all of issues drafted.
   */
  description?: string;

  /**
   * Query for issue type assigned to the issue. This is optional.
   * - Only determine queried issue type from the chat conversation.
   * - If you can't infer the issue type query, leave it blank.
   * - Send issue queries to this tool parameter in order of confidence.
   */
  issue_type_query?: string;

  /**
   * Query for labels assigned to the issue. This is optional.
   * - Only determine queried labels from the chat conversation.
   * - If you can't infer the label queries, leave them blank.
   * - Send labels queries to this tool parameter in order of confidence.
   */
  label_queries?: string[];

  /**
   * Query for milestone assigned to the issue. This is optional.
   * - Only determine queried milestone from the chat conversation.
   * - If you can't infer the milestone query, leave it blank.
   */
  milestone_query?: string;

  /**
   * Query projects assigned to the issue. This is optional.
   * - Only determine queried projects from the chat conversation.
   * - If you can't infer the project query, leave it blank.
   * - Send projects queries to this tool parameter in order of confidence.
   */
  project_queries?: string[];

  /**
   * The name and owner of the repository to create the issue in. This is optional when drafting an issue.
   * - MUST be in the format 'owner/repo'.
   * - Only determine a value from the chat conversation.
   * - You can use repository references from previous chat messages and repository that is mentioned in previous issue drafts.
   * - If you can't infer the missing parameter, leave it blank.
   */
  repository?: string;

  /**
   * A unique identifier for the issue that should remain constant while revising issue details.
   * - You must generate a unique tag for the issue.
   * - Different tags must be used for different issues.
   * - The tag should be a short string that uniquely identifies the issue in the chat.
   * - The tag should stay constant when revising issue details, even if the user asks for it to change.
   */
  tag: string;

  /**
   * The natural language query for the tool to search find an issue template. This is optional.
   * - Determine the template query from the context of chat conversation.
   * - For example if user is asking to create a specific kind of issue - task, bug, feature request etc.
   * - Provide best guess for the template query based on the context of the conversation.
   * - Provide template query even if you don't know what templates exist in the repository.
   * - If the user specifies a template, you MUST pass it to this parameter.
   * - This is a query, not template file name. Do not use the template query in the resulting yaml template field.
   */
  template_query?: string;

  /**
   * The title of the issue.
   * - Generate the title yourself unless the user explicitly tells you what it should be.
   * - If you generate a title, it must be a short summary of the description.
   */
  title: string;
}
