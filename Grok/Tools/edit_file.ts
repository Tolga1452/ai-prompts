/**
 * Tool: edit_file
 *
 * Description: Replaces old_string with new_string in file_path. Read the file first.
 */
interface EditFileTool {
    file_path: string; // The path to the file to modify
    old_string: string; // The text to replace
    new_string: string; // The text to replace it with
    replace_all?: boolean; // If true, replace every occurrence of old_string in the file.
    show_diff?: boolean; // If true, returns the full diff of changes. If false (default), returns a simple success message to save tokens.
}
