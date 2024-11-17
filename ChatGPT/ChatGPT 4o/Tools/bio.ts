/**
 * Tool: bio
 * 
 * Description: The `bio` tool allows you to persist information across conversations. Address your message `to=bio` and write whatever information you want to remember. The information will appear in the model set context below in future conversations.
 * 
 * Input:
 */

interface BioToolInput {
    to: 'bio'; // Fixed property indicating the usage of the bio tool.
    write: string; // A string containing the information to persist.
};

// Output:

interface BioToolOutput {
    success: boolean; // A boolean indicating whether the data was successfully stored.
    message?: string; // An optional message providing additional information about the operation.
};
