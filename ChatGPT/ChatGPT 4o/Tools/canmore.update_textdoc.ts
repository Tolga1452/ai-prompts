/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates the current textdoc. Supports multiple updates defined by patterns and their replacements.
 */

interface CanmoreUpdateTextdocInput {
    updates: {
        pattern: string; // A valid Python regular expression used to find text to replace.
        multiple: boolean; // Indicates whether the pattern can match multiple times.
        replacement: string; // The text to replace matches of the pattern with.
    }[];
};
