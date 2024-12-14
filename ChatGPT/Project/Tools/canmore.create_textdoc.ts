/**
 * Tool: canmore.create_textdoc
 * 
 * Description: Creates a new textdoc to display in the canvas. Used if the user wants to iterate on a long document or code file.
 */

interface CanmoreCreateTextdocInput {
    name: string; // The name of the text document to be created.
    type: 'document' | 'code/python' | 'code/javascript' | 'code/html' | 'code/java' | string; // The type of the textdoc (e.g., 'document' for plain text or 'code/python' for Python code).
    content: string; // The content of the textdoc to be displayed.
};
