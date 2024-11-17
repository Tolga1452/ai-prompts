/**
 * Tool: canmore.update_textdoc
 * 
 * Description: Updates the current text document by rewriting (using ".*") or occasionally editing specific parts of the file. Updates should target only relevant parts of the document content based on the user's message, and all other parts of the content should stay as consistent as possible.
 * 
 * Input:
 */

interface UpdateTextDocInput {
    updates: Array<{
        pattern: string; // A Python regular expression to find parts of the text that need updating.
        multiple: boolean; // Indicates whether the pattern should be applied to multiple occurrences.
        replacement: string; // The replacement text for the given pattern.
    }>;
};

// Output:

type UpdateTextDocOutput = void;
