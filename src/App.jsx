import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { NewsList } from './components/NewsList';
import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';
import { FaCloudMoon } from "react-icons/fa6";
import './index.css';

export default function App() {
  const [searchCity, setSearchCity] = useState('Baku');
  const debouncedSearchCity = useDebounce(searchCity, 500)
  const { data: weatherList, loading, error } = useFetch(
    debouncedSearchCity ? `https://6a74cd3715e0453fe1b54397.mockapi.io/weather?name=${debouncedSearchCity}`
    : 'https://6a74cd3715e0453fe1b54397.mockapi.io/weather'
  )
  const weather = Array.isArray(weatherList) ? weatherList[0] : weatherList;
  return (
    <div className="app-container">
      <header className="app-header">
        <h1><FaCloudMoon style={{ fontSize: '40px' }} /> Weather & News</h1>
      </header>
      <SearchBar searchTerm={searchCity} setSearchTerm={setSearchCity} />
      <WeatherCard weatherData={weather} loading={loading} error={error || (!weather && debouncedSearchCity && !loading ? 'Şəhər tapılmadı.' : null)} />
      <NewsList />
    </div>
  );
}