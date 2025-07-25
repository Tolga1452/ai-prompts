/**
 * Tool: container.open_image
 * 
 * Description: Returns the image at the given absolute path (only absolute paths supported).
 */

interface ContainerOpenImageInput {
    path: string; // The absolute path to the image. Relative paths are not supported.
    user?: string; // The user to run the command as.
};
