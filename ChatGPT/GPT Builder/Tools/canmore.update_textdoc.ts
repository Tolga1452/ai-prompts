/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates an existing text document in the canvas using specified patterns and replacements.
 */

interface CanmoreUpdateTextdocInput {
    updates: {
        pattern: string; // A valid Python regular expression used to identify the text to update.
        multiple: boolean; // Whether to apply the update to multiple matches or only the first one.
        replacement: string; // The replacement text for the matched pattern.
    }[]; // Array of update instructions to apply to the text document.
};
