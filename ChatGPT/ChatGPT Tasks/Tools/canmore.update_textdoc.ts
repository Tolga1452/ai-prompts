/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates the current textdoc. Never use this function unless a textdoc has already been created.
 */

interface CanmoreUpdateTextdocInput {
    updates: {
        pattern: string; // The pattern to match for updates.
        multiple: boolean; // Whether to match multiple occurrences.
        replacement: string; // The replacement text for matches.
    }[];
};
