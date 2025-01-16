/**
 * Tool: bio
 * 
 * Description: The `bio` tool allows you to persist information across conversations. Address your message `to=bio` and write whatever information you want to remember. The information will appear in the model set context below in future conversations.
 */

interface BioInput {
    to: string; // Specify "bio" to address the message to the bio tool.
    message: string; // The information you want to remember.
};
