/**
 * Tool: str_replace
 * 
 * Description: Replace a unique string in a file with another string. old_str must match the raw file content exactly and appear exactly once. When copying from view output, do NOT include the line number prefix (spaces + line number + tab) — it is display-only. View the file immediately before editing; after any successful str_replace, earlier view output of that file in your context is stale — re-view before further edits to the same file.
 */

interface StrReplaceInput {
  description: string; // Why I'm making this edit
  old_str: string; // String to replace (must be unique in file)
  path: string; // Path to the file to edit
  new_str?: string; // String to replace with (empty to delete). Default: ""
}
