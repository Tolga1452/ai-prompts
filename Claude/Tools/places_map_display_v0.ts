/**
 * Tool: places_map_display_v0
 * 
 * Description: Display locations on a map with your recommendations and insider tips. Workflow: 1. Use places_search tool first to find places and get their place_id 2. Call this tool with place_id references - the backend will fetch full details. CRITICAL: Copy place_id values EXACTLY from places_search tool results. Place IDs are case-sensitive and must be copied verbatim - do not type from memory or modify them.
 */

interface MapLocationInput {
  name: string; // Display name of the location
  latitude: number; // Latitude coordinate
  longitude: number; // Longitude coordinate
  place_id?: string | null; // Google Place ID. If provided, backend fetches full details.
  address?: string | null; // Address for custom locations without place_id
  notes?: string | null; // Tour guide tip or insider advice
  arrival_time?: string | null; // Suggested arrival time (e.g., '9:00 AM')
  duration_minutes?: number | null; // Suggested time at location in minutes
}

interface DayInput {
  day_number: number; // Day number (1, 2, 3...)
  locations: MapLocationInput[]; // Stops for this day. Maximum 50 items, minimum 1 item.
  title?: string | null; // Short evocative title (e.g., 'Temple Hopping')
  narrative?: string | null; // Tour guide story arc for the day
}

interface PlacesMapDisplayV0Input {
  locations?: MapLocationInput[] | null; // Simple marker display - list of locations without day structure. Maximum 50 items.
  days?: DayInput[] | null; // Itinerary with day structure for multi-day trips. Maximum 30 items.
  title?: string | null; // Title for the map or itinerary
  narrative?: string | null; // Tour guide intro for the trip
  show_route?: boolean | null; // Show route between stops. Default: true for itinerary, false for markers.
  travel_mode?: "driving" | "walking" | "transit" | "bicycling" | null; // Travel mode for directions (default: driving)
  mode?: "markers" | "itinerary" | null; // Display mode. Auto-inferred: markers if locations, itinerary if days.
}
