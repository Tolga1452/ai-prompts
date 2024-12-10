/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates the current textdoc.
 */

interface CanmoreUpdateTextdocInput {
    updates: {
        pattern: string; // A valid Python regular expression to match the section to be updated.
        multiple: boolean; // Whether to apply the update to multiple occurrences.
        replacement: string; // The replacement text for the matched pattern.
    }[]; // An array of updates to apply to the textdoc.
};
