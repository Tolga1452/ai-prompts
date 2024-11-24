/**
 * Tool: repl
 * 
 * Description: The analysis tool (also known as the REPL) can be used as to execute code in a JavaScript environment in the browser.
 * 
 * Input:
 */

interface REPLInput {
    /**
     * JavaScript code to execute in the browser environment
     */
    code: string;
};

// Output:
interface REPLOutput {
    /**
     * Name of the tool ("REPL")
     */
    name: string;

    /**
     * Output from console.log, console.warn, and console.error statements
     * or error traces if any errors occur during execution
     */
    output: string;
};
