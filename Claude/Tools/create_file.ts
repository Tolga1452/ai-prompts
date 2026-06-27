/**
 * Tool: create_file
 * 
 * Description: Create a new file with content in the container. Fails if the path already exists — use str_replace to edit an existing file, or bash_tool (cat > path << 'EOF') to overwrite it.
 */

interface CreateFileInput {
  description: string; // Why I'm creating this file. ALWAYS PROVIDE THIS PARAMETER FIRST.
  path: string; // Path to the file to create. ALWAYS PROVIDE THIS PARAMETER SECOND.
  file_text: string; // Content to write to the file. ALWAYS PROVIDE THIS PARAMETER LAST.
}
