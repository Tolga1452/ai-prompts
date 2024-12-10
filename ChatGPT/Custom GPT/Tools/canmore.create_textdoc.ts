/**
 * Tool: canmore.create_textdoc
 * 
 * Description: Creates a new textdoc to display in the canvas. ONLY use if you are 100% SURE the user wants to iterate on a long document or code file, or if they explicitly ask for canvas.
 */

interface CanmoreCreateTextdocInput {
    name: string; // The name of the textdoc.
    type: "document" | "code/python" | "code/javascript" | "code/html" | "code/java" | string; // The type of the textdoc (e.g., document, code in specific language).
    content: string; // The initial content of the textdoc.
};
