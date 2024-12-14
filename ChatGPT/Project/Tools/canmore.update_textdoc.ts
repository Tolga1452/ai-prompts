/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates the current textdoc with specified changes using patterns and replacements.
 */

interface CanmoreUpdateTextdocInput {
    updates: {
        pattern: string; // A valid Python regular expression to find text to update.
        multiple: boolean; // Whether to apply the replacement to all matches or only the first one.
        replacement: string; // The replacement text for the matched patterns.
    }[];
};
