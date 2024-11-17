/**
 * Tool: functions.planskill
 * 
 * Description: The planskill tool is used to create a plan to outline the necessary steps to answer a user query.
 * 
 * Input:
 */

interface PlanSkillInput {
    current_url: string; // URL user is currently on. This helps the model to understand the context of the user's query.
    difficulty_level: number; // On a scale of 1-100, how difficult is this task?
    possible_vague_parts_of_query: string[]; // The users query may be vague or ambigious. They might be talking about parts of the codebase that you don't have knowledge of, or may include terms that have other meaning without your understanding.
    summary_of_conversation: string; // This should be a summary of the entire conversation. It should include SPECIFIC details from the user's query and the conversation, such as repo names, commit SHAs, etc.
    user_query: string; // Input from the user about the question they need answered.
};

// Output:

type PlanSkillOutput = any;
