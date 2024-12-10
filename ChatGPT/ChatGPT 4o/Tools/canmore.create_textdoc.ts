/**
 * Tool: canmore.create_textdoc
 * 
 * Description: Creates a new textdoc to display in the canvas. Useful for when the user wants to iterate on a long document or code file.
 */

interface CanmoreCreateTextdocInput {
    name: string; // The name of the textdoc.
    type: "document" | "code/python" | "code/javascript" | "code/html" | "code/java" | string; // Specifies the type of the textdoc (e.g., "document" or a specific programming language).
    content: string; // The content of the textdoc.
};
