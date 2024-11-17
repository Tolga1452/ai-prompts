/**
 * Tool: python
 * 
 * Description: Executes Python code in a stateful Jupyter notebook environment. Responds with the output of the execution or time out after 60 seconds.
 * 
 * Input:
 */

interface PythonInput {
    code: string; // The Python code to be executed.
};

// Output:

type PythonOutput = string // The output of the Python code execution.
