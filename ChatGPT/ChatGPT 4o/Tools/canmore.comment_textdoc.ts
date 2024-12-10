/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Adds comments to the current textdoc. Comments should provide actionable and specific suggestions for improvement.
 */

interface CanmoreCommentTextdocInput {
    comments: {
        pattern: string; // A valid Python regular expression used to find text to comment on.
        comment: string; // A specific and actionable suggestion related to the matched text.
    }[];
};
