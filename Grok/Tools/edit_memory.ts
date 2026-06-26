/**
 * Tool: edit_memory
 *
 * Description: Edit the user's memory by replacing an exact occurrence of old_str with new_str. The memory is a markdown document persisting across conversations. To add content, use an existing line as old_str and include it plus new content in new_str.
 */
interface EditMemoryTool {
    old_str: string; // Exact text to replace (must appear exactly once). Use empty string to append to end of file.
    new_str: string; // Text to replace it with. Use empty string to delete the matched text.
}
