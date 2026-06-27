/**
 * Tool: memory_user_edits
 * 
 * Description: Manage memory. View, add, remove, or replace memory edits that Claude will remember across conversations. Memory edits are stored as a numbered list.
 */

interface MemoryUserEditsInput {
  command: "view" | "add" | "remove" | "replace"; // The operation to perform on memory controls
  control?: string | null; // For 'add': new control to add as a new line
  line_number?: number | null; // For 'remove'/'replace': line number (1-indexed) of the control to modify
  replacement?: string | null; // For 'replace': new control text to replace the line with
}
