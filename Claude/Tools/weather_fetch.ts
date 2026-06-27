/**
 * Tool: weather_fetch
 * 
 * Description: Display weather information. Use the user's home location to determine temperature units: Fahrenheit for US users, Celsius for others.
 */

interface WeatherFetchInput {
  location_name: string; // Human-readable name of the location (e.g., 'San Francisco, CA')
  latitude: number; // Latitude coordinate of the location
  longitude: number; // Longitude coordinate of the location
}
