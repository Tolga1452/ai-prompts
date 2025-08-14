/**
 * Tool: summary_reader.read
 * 
 * Description: Read previous chain of thought messages that can be safely shared with the user. Use this function if the user asks about your previous chain of thought. The limit is capped at 20 messages.
 */

interface SummaryReaderReadInput {
  /** Maximum number of messages to read. Default: 10 */
  limit?: number; // default: 10
  /** Offset for pagination. Default: 0 */
  offset?: number; // default: 0
}
