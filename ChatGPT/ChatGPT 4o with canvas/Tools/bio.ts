/**
 * Tool: bio
 * 
 * Description: The `bio` tool allows you to persist information across conversations. Address your message `to=bio` and write whatever information you want to remember. The information will appear in the model set context below in future conversations.
 */

interface BioInput {
    to: "bio"; // Always set this to "bio" to indicate the bio tool.
    write: string; // Information you want to store across conversations.
};
