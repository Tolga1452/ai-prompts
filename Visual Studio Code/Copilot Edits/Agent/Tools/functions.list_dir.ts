/**
 * Tool: functions.list_dir
 * 
 * Description: List the contents of a directory. Result will have the name of the child. If the name ends in /, it's a folder, otherwise a file.
 */

interface ListDirInput {
    path: string; // The absolute path to the directory to list.
};
