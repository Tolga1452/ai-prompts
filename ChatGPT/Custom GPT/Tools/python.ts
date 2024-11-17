/**
 * Tool: python
 * 
 * Description: The python tool enables the AI to execute Python code in a stateful Jupyter notebook environment. It is used to perform calculations, data analysis, visualizations, and other programming tasks that require Python's capabilities.
 * 
 * Input:
 */

interface PythonInput {
    code: string; // The Python code to be executed.
};

// Output:

interface PythonOutput {
    output: any; // The result of the executed Python code, which can be a string, number, plot, or any data structure produced by the code.
};
