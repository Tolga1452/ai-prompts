/**
 * Tool: python
 * 
 * Description: Executes Python code in a stateful Jupyter notebook environment. Responds with the output of the execution or time out after 60 seconds.
 */

interface PythonInput {
    code: string; // The Python code to be executed.
};
