import { BiError } from "react-icons/bi";
import { FaHourglassHalf } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
export function WeatherCard({ weatherData, loading, error }) {
  if (loading) {
    return (
      <div className="weather-card">
        <p className="weather-status-text"><FaHourglassHalf /> Məlumatlar gətirilir...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="weather-card weather-card-error">
        <p className="weather-error-text"><BiError /> {error}</p>
      </div>
    )
  }
  const getWeatherIcon = (code) => {
    if (code === 0) return '☀️'
    if (code >= 1 && code <= 3) return '⛅'
    if (code >= 45 && code <= 48) return '🌫️'
    if (code >= 51 && code <= 67) return '🌧️'
    if (code >= 71) return '❄️'
    return '🌤️'
  }

  return (
    <div className="weather-card">
      <div className="weather-location">📍 {weatherData?.name}, {weatherData?.country}</div>
      <div className="weather-temp-container">
        <span className="weather-icon">{getWeatherIcon(weatherData?.weatherCode || 0)}</span>
        <span className="weather-temp">{Math.round(weatherData?.temp ?? 0)}°</span>
      </div>
      <div className="weather-details">
        <span><FaWind /> Külek: {weatherData?.windSpeed} km/h</span> | <span>{weatherData?.condition}</span>
      </div>
    </div>
  )
}