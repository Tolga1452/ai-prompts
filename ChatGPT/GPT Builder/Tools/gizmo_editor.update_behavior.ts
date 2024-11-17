/**
 * Tool: gizmo_editor.update_behavior
 * 
 * Description: Updates the behavior of a GPT, allowing customization of its name, context, description, example prompts, and profile picture.
 * 
 * Input:
 */

interface GizmoEditorUpdateBehaviorInput {
    /**
     * The new name of the GPT. Must be under 40 characters and use spaces instead of camel case.
     */
    name?: string;
    /**
     * The complete set of instructions defining how the GPT should respond, incorporating role, guidelines, and other behaviors.
     */
    context?: string;
    /**
     * A short description summarizing the GPT's behavior. Limited to 100 characters.
     */
    description?: string;
    /**
     * A list of four example prompts showcasing the GPT's behavior. Each must be under 100 characters.
     */
    prompt_starters?: string[];
    /**
     * The File ID of an uploaded image to be used as the GPT's profile picture. This is not used for generated images.
     */
    profile_pic_file_id?: string;
};

// Output:

interface GizmoEditorUpdateBehaviorOutput {
    /**
     * Confirmation that the behavior has been updated successfully.
     */
    success: boolean;
};
