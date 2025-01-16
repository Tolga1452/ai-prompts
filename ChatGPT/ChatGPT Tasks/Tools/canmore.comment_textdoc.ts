/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Comments on the current textdoc. Never use this function unless a textdoc has already been created.
 */

interface CanmoreCommentTextdocInput {
    comments: {
        pattern: string; // The pattern to match for comments.
        comment: string; // The comment text.
    }[];
};
