/**
 * Tool: functions.edit_file
 * 
 * Description: Edit a file in the workspace. Use this tool once per file that needs to be modified, even if there are multiple changes for a file. Generate the "explanation" property first.
 */

interface EditFileInput {
    code: string; // The code change to apply to the file.
    explanation: string; // A short explanation of the edit being made. Can be the same as the explanation you showed to the user.
    filePath: string; // An absolute path to the file to edit.
};
