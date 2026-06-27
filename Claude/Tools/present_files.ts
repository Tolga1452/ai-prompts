/**
 * Tool: present_files
 * 
 * Description: The present_files tool makes files visible to the user for viewing and rendering in the client interface. When to use the present_files tool: Making any file available for the user to view, download, or interact with; Presenting multiple related files at once; After creating a file that should be presented to the user. When NOT to use the present_files tool: When you only need to read file contents for your own processing; For temporary or intermediate files not meant for user viewing.
 */

interface PresentFilesInput {
  filepaths: string[]; // Array of file paths identifying which files to present to the user. Minimum 1 item.
}
