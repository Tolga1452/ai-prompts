/**
 * Tool: canmore.comment_textdoc
 * 
 * Description: Comments on the current textdoc. Never use this function unless a textdoc has already been created.
 */

interface CanmoreCommentTextdocTool {
    comments: {
        pattern: string; // A valid Python regular expression used with re.search.
        comment: string; // A specific and actionable suggestion on how to improve the textdoc.
    }[];
}
