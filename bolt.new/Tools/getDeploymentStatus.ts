/**
 * Tool: getDeploymentStatus
 * 
 * Description: Tool to retrieve the deploy status of the project. Returns the deployment status. This tool should only be called if the project is currently being deployed.
 * 
 * Input:
 */

interface GetDeploymentStatusInput {
    /**
     * This parameter should be ignored
     */
    id: string;
};

// Output:

interface GetDeploymentStatusOutput {
    /**
     * The deployment status response
     */
    status: string;
};
