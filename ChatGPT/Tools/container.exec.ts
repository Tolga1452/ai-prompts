/**
 * Tool: container.exec
 * 
 * Description: Returns the output of the command. Allocates an interactive pseudo-TTY if (and only if) `session_name` is set.
 */

interface ContainerExecInput {
    cmd: string[]; // Command to execute.
    session_name?: string; // Set an exec session name to allocate a pseudo-TTY for the output.
    workdir?: string; // The working directory for the command.
    timeout?: number; // The maximum time to wait for the command to complete in milliseconds.
    env?: { [key: string]: string }; // Environment variables.
    user?: string; // The user to run the command as.
};
