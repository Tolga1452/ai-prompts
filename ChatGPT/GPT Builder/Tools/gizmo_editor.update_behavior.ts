/**
 * Tool: gizmo_editor.update_behavior
 * 
 * Description: Updates the GPT's behavior, including its name, context, description, and additional settings.
 */

interface GizmoEditorUpdateBehaviorInput {
    name?: string; // The new name of the GPT; must be concise and reflective of its purpose.
    context?: string; // Detailed context and instructions defining the GPT's behavior and response style.
    description?: string; // A concise description of the GPT's behavior and purpose.
    prompt_starters?: string[]; // Example prompts that elicit representative responses from the GPT.
    profile_pic_file_id?: string; // File ID of an uploaded image to use as the profile picture.
};
