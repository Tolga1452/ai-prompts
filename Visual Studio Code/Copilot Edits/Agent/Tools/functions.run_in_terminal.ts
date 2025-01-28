/**
 * Tool: functions.run_in_terminal
 * 
 * Description: Run a shell command in a terminal. State is persistent across command calls. Use this instead of printing a shell codeblock and asking the user to run it. If the command is a long-running background process, you MUST pass isBackground=true. Background terminals will return a terminal ID which you can use to check the output of a background process with copilot_getTerminalOutput.
 */

interface RunInTerminalInput {
    command: string; // The command to run in the terminal.
    explanation: string; // A one-sentence description of what the command does. This will be shown to the user before the command is run.
    isBackground: boolean; // Whether the command starts a background process. If true, the command will run in the background and you will not see the output. If false, the tool call will block on the command finishing, and then you will get the output. Examples of background processes: building in watch mode, starting a server. You can check the output of a background process later on by using copilot_getTerminalOutput.
};
