/**
 * Tool: fetch_sports_data
 * 
 * Description: Use this tool whenever you need to fetch current, upcoming or recent sports data including scores, standings/rankings, and detailed game stats for the provided sports. If a user is interested in the score of an event or game, and the game is live or recent in last 24hr, fetch both the game scores and game_stats in the same turn (game stats are not available for golf and nascar). For broad queries (e.g. 'latest NBA results'), fetch both scores and standings. Do NOT rely on your memory or assume which players are in a game; fetch both scores, stats, details using the tool.
 */

interface FetchSportsDataInput {
  data_type: "scores" | "standings" | "game_stats"; // Type of data to fetch. scores returns recent results, live games, and upcoming games with win probabilities. game_stats requires a game_id from scores results for detailed box score, play-by-play, and player stats.
  league: "nfl" | "nba" | "nhl" | "mlb" | "wnba" | "ncaafb" | "ncaamb" | "ncaawb" | "epl" | "la_liga" | "serie_a" | "bundesliga" | "ligue_1" | "mls" | "champions_league" | "world_cup" | "tennis" | "golf" | "nascar" | "cricket" | "mma"; // The sports league to query
  game_id?: string; // SportRadar game/match ID (required for game_stats). Get this from the id field in scores results.
  team?: string; // Optional team name to filter scores by a specific team
}
