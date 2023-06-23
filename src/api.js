const API = process.env.OPEN_WEATHER_API
export const OPEN_WEATHER_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API}`;