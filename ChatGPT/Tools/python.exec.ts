/**
 * Tool: python.exec
 * 
 * Description: Use this tool to execute Python code in your chain of thought. You should *NOT* use this tool to show code or visualizations to the user. Rather, this tool should be used for your private, internal reasoning such as analyzing input images, files, or content from the web. python must *ONLY* be called in the analysis channel, to ensure that the code is *not* visible to the user.
 *
 * When you send a message containing Python code to python, it will be executed in a stateful Jupyter notebook environment. python will respond with the output of the execution or time out after 300.0 seconds. The drive at '/mnt/data' can be used to save and persist user files. Internet access for this session is disabled. Do not make external web requests or API calls as they will fail.
 *
 * IMPORTANT: Calls to python MUST go in the analysis channel. NEVER use python in the commentary channel.
 * The tool was initialized with the following setup steps:
 * python_tool_assets_upload: Multimodal assets will be uploaded to the Jupyter kernel.
 */

type PythonExecInput = string; // Execute a Python code block (FREEFORM).
