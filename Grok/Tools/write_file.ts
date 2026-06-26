/**
 * Tool: write_file
 *
 * Description: Writes content to file_path, overwriting if it exists. Read existing files first.
 */
interface WriteFileTool {
    file_path: string; // The path to the file to write
    content: string; // The content to write to the file
}
