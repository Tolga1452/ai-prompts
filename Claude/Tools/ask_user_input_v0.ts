/**
 * Tool: ask_user_input_v0
 * 
 * Description: Present tappable options to gather user preferences before providing advice. This tool displays interactive buttons that users can tap to answer, which is much easier than typing on mobile. Use this for ELICITATION - when you need to understand the user's preferences, constraints, or goals to give useful advice.
 */

interface AskUserInputQuestion {
  question: string; // The question text shown to user
  options: string[]; // 2-4 options with short labels
  type?: "single_select" | "multi_select" | "rank_priorities"; // Question type. Default: "single_select"
}

interface AskUserInputV0Input {
  questions: AskUserInputQuestion[]; // 1-3 questions to ask the user. Minimum 1, maximum 3 items.
}
