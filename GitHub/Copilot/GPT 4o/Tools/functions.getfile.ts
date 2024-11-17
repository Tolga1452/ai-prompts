/**
 * Tool: functions.getfile
 * 
 * Description: Search for a file in a GitHub repository by its path or name. Returns a list of the top matching files with their contents.
 * 
 * Input:
 */

interface GetFileInput {
    path: string; // The filename or full file path of the file to retrieve (e.g. "my_file.cc" or "path/to/my_file.cc")
    ref?: string; // The ref of the file to get, whether it's a commit SHA, branch name, or tag name.
    repo: string; // The name and owner of the repo of the file.
};

// Output:

type GetFileOutput = any;
