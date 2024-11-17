/**
 * Tool: python
 * 
 * Description: The `python` tool executes Python code in a stateful Jupyter notebook environment, providing output or analysis based on the code execution.
 * 
 * Input:
 */

interface PythonToolInput {
    code: string; // The Python code to be executed.
};

// Output:

interface PythonToolOutput {
    result: string | object | number | boolean | null; // The result of the Python code execution.
    error?: string; // An optional error message if the code execution fails.
};
