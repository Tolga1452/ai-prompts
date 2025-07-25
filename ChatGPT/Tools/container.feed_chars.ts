/**
 * Tool: container.feed_chars
 * 
 * Description: Feed characters to an exec session's STDIN. Then, wait some amount of time, flush STDOUT/STDERR, and show the results.
 */

interface ContainerFeedCharsInput {
    session_name: string; // Which exec session to feed characters to.
    chars: string; // The characters to feed. May be empty.
    yield_time_ms?: number; // Number of milliseconds to wait before flushing STDOUT/STDERR. Default: 100.
};
