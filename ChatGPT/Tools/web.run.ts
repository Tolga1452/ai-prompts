/**
 * Tool: web.run
 * 
 * Description: Tool for accessing the internet.
 */

interface WebRunTool {
    open?: {
        ref_id: string;
        lineno: number | null;
    }[] | null;
    click?: {
        ref_id: string;
        id: number;
    }[] | null;
    find?: {
        ref_id: string;
        pattern: string;
    }[] | null;
    image_query?: {
        q: string;
        recency: number | null;
        domains: string[] | null;
    }[] | null;
    sports?: {
        tool: "sports";
        fn: "schedule" | "standings";
        league: "nba" | "wnba" | "nfl" | "nhl" | "mlb" | "epl" | "ncaamb" | "ncaawb" | "ipl";
        team: string | null;
        opponent: string | null;
        date_from: string | null;
        date_to: string | null;
        num_games: number | null;
        locale: string | null;
    }[] | null;
    finance?: {
        ticker: string;
        type: "equity" | "fund" | "crypto" | "index";
        market: string | null;
    }[] | null;
    weather?: {
        location: string;
        start: string | null;
        duration: number | null;
    }[] | null;
    calculator?: {
        expression: string;
        prefix: string;
        suffix: string;
    }[] | null;
    time?: {
        utc_offset: number;
    }[] | null;
    response_length?: "short" | "medium" | "long";
    search_query?: {
        q: string;
        recency: number | null;
        domains: string[] | null;
    }[] | null;
}
