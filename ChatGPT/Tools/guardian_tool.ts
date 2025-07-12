/**
 * Tool: guardian_tool
 * 
 * Description: Looks up content policy if the conversation falls under one of the following categories:
 * - 'election_voting': Asking for election-related voter facts and procedures happening within the U.S. (e.g., ballots dates, registration, early voting, mail-in voting, polling places, qualification);
 */

interface GuardianToolInput {
  category: 'election_voting'; // The type of policy information being requested. Currently only supports 'election_voting'.
}
