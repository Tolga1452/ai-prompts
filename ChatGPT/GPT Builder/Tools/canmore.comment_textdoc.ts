/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Adds comments to specific sections of an existing text document in the canvas based on patterns.
 */

interface CanmoreCommentTextdocInput {
    comments: {
        pattern: string; // A valid Python regular expression used to identify the text section for commenting.
        comment: string; // The comment to associate with the matched pattern.
    }[]; // Array of comments to apply to the text document.
};
