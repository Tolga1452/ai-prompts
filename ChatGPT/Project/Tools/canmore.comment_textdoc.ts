/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Adds specific, actionable comments to the current textdoc to suggest improvements or changes.
 */

interface CanmoreCommentTextdocInput {
    comments: {
        pattern: string; // A valid Python regular expression to locate the part of the textdoc to comment on.
        comment: string; // The suggestion or feedback for the located part.
    }[];
};
