/**
 * Tool: read_file
 *
 * Description: Read the contents of file_path. Supports images.
 */
interface ReadFileTool {
    file_path: string; // The file path to read
    offset?: number; // The line number to start reading from
    limit?: number; // The number of lines to read
}
