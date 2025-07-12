/**
 * Tool: canmore.create_textdoc
 * 
 * Description: Creates a new textdoc to display in the canvas.
 */

interface CanmoreCreateTextdocTool {
    name: string; // The name of the document.
    type: "document" | "code/python" | "code/javascript" | "code/html" | "code/java" | string; // The type of document or code (e.g., "code/react", "code/cpp").
    content: string; // The initial content of the document.
}
