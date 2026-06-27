/**
 * Tool: places_search
 * 
 * Description: Search for places, businesses, restaurants, and attractions using Google Places. Supports multiple queries in a single call for efficient itinerary planning.
 */

interface SearchQuery {
  query: string; // Natural language search query (e.g., 'temples in Asakusa', 'ramen restaurants in Tokyo')
  max_results?: number; // Maximum number of results for this query (1-10, default 5)
}

interface PlacesSearchInput {
  queries: SearchQuery[]; // List of search queries (1-10 queries). Each query can specify its own max_results. Minimum 1, maximum 10 items.
  location_bias_lat?: number | null; // Optional latitude coordinate to bias results toward a specific area
  location_bias_lng?: number | null; // Optional longitude coordinate to bias results toward a specific area
  location_bias_radius?: number | null; // Optional radius in meters for location bias (default 5000 if lat/lng provided)
}
