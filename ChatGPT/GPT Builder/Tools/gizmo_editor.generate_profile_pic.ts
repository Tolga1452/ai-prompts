/**
 * Tool: gizmo_editor.generate_profile_pic
 * 
 * Description: Generates a profile picture based on a provided text prompt. The tool is designed to create visually distinctive and scalable images that work well at small sizes.
 * 
 * Input:
 */

interface GizmoEditorGenerateProfilePicInput {
    /**
     * A detailed description of the image to be used as a profile picture. It must follow specific guidelines to ensure clarity and scalability.
     */
    prompt: string;
};

// Output:

interface GizmoEditorGenerateProfilePicOutput {
    /**
     * The generated profile picture, including its URL and metadata.
     */
    profile_pic: {
        url: string;
        id: string;
    };
};
