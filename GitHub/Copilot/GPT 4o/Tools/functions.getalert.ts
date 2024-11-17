/**
 * Tool: functions.getalert
 * 
 * Description: Returns GitHub security alert details and related/affected code. Request a specific alert by including a URL in the format /:owner/:repo/security/(code-scanning|dependabot|secret-scanning)/:number?ref=:ref. Request pull request alerts by including a URL in the format /:owner/:repo/pull/:number. Request alert counts for each category and severity by including a URL in the format /:owner/:repo.
 * 
 * Input:
 */

interface GetAlertInput {
    url: string; // Fetch alerts associated with this URL.
};

// Output:

type GetAlertOutput = any;
