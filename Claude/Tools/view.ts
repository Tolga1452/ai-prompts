/**
 * Tool: view
 * 
 * Description: Supports viewing text, images, and directory listings. Supported path types: Directories: Lists files and directories up to 2 levels deep, ignoring hidden items and node_modules; Image files (.jpg, .jpeg, .png, .gif, .webp): Displays the image visually; Text files: Displays numbered lines (prefix `    N\t` is display-only — do not include it in str_replace's `old_str`). You can optionally specify a view_range to see specific lines.
 */

interface ViewInput {
  description: string; // Why I need to view this
  path: string; // Absolute path to file or directory, e.g. `/repo/file.py` or `/repo`.
  view_range?: [number, number] | null; // Optional line range for text files. Format: [start_line, end_line] where lines are indexed starting at 1. Use [start_line, -1] to view from start_line to the end of the file. When not provided, the entire file is displayed, truncating from the middle if it exceeds 16,000 characters (showing beginning and end).
}
