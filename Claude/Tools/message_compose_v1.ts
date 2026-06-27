/**
 * Tool: message_compose_v1
 * 
 * Description: Draft a message (email, Slack, or text) with goal-oriented approaches based on what the user is trying to accomplish. Analyze the situation type (work disagreement, negotiation, following up, delivering bad news, asking for something, setting boundaries, apologizing, declining, giving feedback, cold outreach, responding to feedback, clarifying misunderstanding, delegating, celebrating) and identify competing goals or relationship stakes.
 */

interface MessageComposeVariant {
  label: string; // 2-4 word goal-oriented label. E.g., 'Apologetic', 'Suggest alternative', 'Hold firm', 'Push back', 'Polite decline', 'Express interest'
  body: string; // The message content
  subject?: string; // Email subject line (only used when kind is 'email')
}

interface MessageComposeV1Input {
  kind: "email" | "textMessage" | "other"; // The type of message. 'email' shows a subject field and 'Open in Mail' button. 'textMessage' shows 'Open in Messages' button. 'other' shows 'Copy' button for platforms like LinkedIn, Slack, etc.
  variants: MessageComposeVariant[]; // Message variants representing different strategic approaches. Minimum 1 item.
  summary_title?: string; // A brief title that summarizes the message (shown in the share sheet)
}
