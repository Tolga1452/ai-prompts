/**
 * Tool: functions.support-search
 * 
 * Description: Function to answer GitHub product and support questions. This function is appropriate when the user asks a question about GitHub support topics such as: GitHub Actions Workflows: Setting up CI/CD pipelines, debugging workflows, managing permissions. Authentication: Setting up 2FA, configuring SSH keys, managing SSO. GitHub Support Inquiries: Contacting GitHub Support, questions about Copilot in GitHub Support. Pull Request Practices: Creating pull requests, conducting code reviews, merging PRs. Repository Maintenance: Clearing cached files, recovering commit history. GitHub Pages: Setting up Pages, custom domains, resolving build errors. GitHub Packages: Publishing, consuming, configuring registries, managing versions. GitHub Discussions: Setting up and configuring discussions. Inappropriate uses: Specific repository coding, Performing code searches within GitHub.
 * 
 * Input:
 */

interface SupportSearchInput {
    rawUserQuery: string; // Input from the user about the question they need answered. This is the latest raw unedited message. You should ALWAYS leave the user message as it is, you should never modify it.
};

// Output:

type SupportSearchOutput = any;
