/**
 * Tool: artifacts
 * 
 * Description: Creates and updates artifacts. Artifacts are self-contained pieces of content that can be referenced and updated throughout the conversation in collaboration with the user.
 * 
 * Input:
 */

interface ArtifactsToolInput {
    /**
     * Command to execute on the artifact (create, update, rewrite)
     */
    command: string;

    /**
     * Unique identifier for the artifact
     */
    id: string;

    /**
     * Content of the artifact (required for create/rewrite)
     */
    content?: string | null;

    /**
     * Programming language of the artifact content
     */
    language?: string | null;

    /**
     * Title of the artifact
     */
    title?: string | null;

    /**
     * MIME type of the artifact (e.g. "application/vnd.ant.code", "text/markdown", "text/html", "image/svg+xml", "application/vnd.ant.mermaid", "application/vnd.ant.react")
     */
    type?: string | null;

    /**
     * Original string to replace when updating (required for update)
     */
    old_str?: string | null;

    /**
     * New string to replace with when updating (required for update)
     */
    new_str?: string | null;
};

// Output:
type ArtifactsToolOutput = any;
