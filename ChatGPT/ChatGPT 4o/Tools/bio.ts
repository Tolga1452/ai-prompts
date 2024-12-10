/**
 * Tool: bio
 * 
 * Description: The `bio` tool allows you to persist information across conversations. Address your message `to=bio` and write whatever information you want to remember. The information will appear in the model set context below in future conversations.
 */

interface BioToolInput {
    to: 'bio'; // Fixed property indicating the usage of the bio tool.
    write: string; // A string containing the information to persist.
};
