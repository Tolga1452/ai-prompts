/**
 * Tool: functions.read_file
 * 
 * Description: Read the contents of a file.
 */

interface ReadFileInput {
    filePath: string; // The absolute paths of the files to read.
    startLineNumberBaseZero: number; // The line number to start reading from, 0-based.
    endLineNumberBaseZero: number; // The inclusive line number to end reading at, 0-based.
};
