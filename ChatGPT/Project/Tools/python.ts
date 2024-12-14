/**
 * Tool: python
 * 
 * Description: Executes Python code in a stateful Jupyter notebook environment. Responds with the output of the execution or times out after 60.0 seconds.
 */

interface PythonInput {
    code: string; // The Python code to be executed in the Jupyter notebook environment.
};
