/**
 * Tool: canmore.create_textdoc
 * 
 * Description: Creates a new text document in the canvas with specified attributes.
 */

interface CanmoreCreateTextdocInput {
    name: string; // The name of the document to create.
    type: "document" | "code/python" | "code/javascript" | "code/html" | "code/java" | string; // The type of document, indicating its format or purpose.
    content: string; // The initial content of the document.
};
