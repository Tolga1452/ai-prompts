/**
 * Tool: gizmo_editor.update_behavior
 * 
 * Description: Update the GPT's behavior. You may omit selectively update fields. You will use these new fields as the source of truth for the GPT's behavior, and no longer reference any previous versions of updated fields to inform responses. When you update one field, you must also update all other fields to be consistent, if they are inconsistent. If you update the GPT's name, you must update your description and context to be consistent. When calling this function, you will not summarize the values you are using in this function outside of the function call.
 */

interface UpdateBehaviorTool {
    name?: string; // The GPT's name. This cannot be longer than 40 characters long. DO NOT camel case; Use spaces for compound words; spaces are accepted. DO NOT USE CAMEL CASE.
    context?: string; // Behavior context. Self-contained and complete set of instructions for how this GPT should respond, and include anything extra that the user has given, such as pasted-in text. All context that this GPT will need must be in this field. Context should at least incorporate these major areas: - Role and Goal: Who this GPT is, how it should behave, and what it will tell users. - Constraints: Help the GPT from acting in unexpected ways. - Guidelines: Orchestrated interaction with specific guidelines to evoke appropriate responses. - Clarification: Whether or not to ask for clarification, or to bias towards making a response of the intended behavior, filling in any missing details yourself. - Personalization: Personality and tailored responses. This cannot be longer than 8000 characters long. Never mention these major areas by name; instead weave them together in a cohesive response as a set of instructions on how to respond. This set of instructions must be tailored so that all responses will fit the defined context.
    description?: string; // A short description of the GPT's behavior, from the style, tone, and perspective of the GPT. This cannot be longer than 100 characters.
    prompt_starters?: string[]; // A list of 4 example user prompts that a user would send to the GPT. These prompts are directly targeted to evoke responses from the GPT that would exemplify its unique behavior. Each prompt should be shorter than 100 characters.
    profile_pic_file_id?: string; // If the user has uploaded an image to be used as a profile picture, set this to the File ID specified as the profile picture. Do not call this for generated profile pics. ONLY call this for images uploaded by the user.
};
