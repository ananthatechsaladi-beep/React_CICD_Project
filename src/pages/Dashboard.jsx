import { Alert, Box, Button, Card, Chip, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { getCurrentWeather, getFavoriteCities, getHourlyForecast, getWeeklyForecast } from '../services/weatherApi'
import SearchBar from '../components/common/SearchBar'
import Loading from '../components/common/Loading'
import CurrentWeather from '../components/weather/CurrentWeather'
import HourlyForecast from '../components/weather/HourlyForecast'
import WeeklyForecast from '../components/weather/WeeklyForecast'
import WeatherStats from '../components/weather/WeatherStats'
import FavoriteCities from '../components/weather/FavoriteCities'
import TemperatureChart from '../components/charts/TemperatureChart'
import HumidityChart from '../components/charts/HumidityChart'
import RainChart from '../components/charts/RainChart'
import { useLanguage } from '../context/LanguageContext'

const defaultCity = 'Bangalore'

function Dashboard() {
  const { t } = useLanguage()
  const [city, setCity] = useState(defaultCity)
  const [weather, setWeather] = useState(null)
  const [hourlyForecast, setHourlyForecast] = useState([])
  const [weeklyForecast, setWeeklyForecast] = useState([])
  const [favoriteCities, setFavoriteCities] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('weather-favorites') || '[]')
    } catch {
      return []
    }
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchWeather = async (targetCity = city) => {
    setLoading(true)
    setError(null)

    try {
      const [current, hourly, weekly] = await Promise.all([
        getCurrentWeather(targetCity),
        getHourlyForecast(targetCity),
        getWeeklyForecast(targetCity),
      ])

      setWeather(current)
      setHourlyForecast(hourly)
      setWeeklyForecast(weekly)
    } catch {
      setError(t.unableLoad)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(defaultCity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('weather-favorites', JSON.stringify(favoriteCities))
  }, [favoriteCities])

  const chartTemperatureData = useMemo(
    () => hourlyForecast.map((entry) => ({ time: entry.time, temperature: entry.temperature })),
    [hourlyForecast],
  )

  const chartHumidityData = useMemo(
    () => hourlyForecast.map((entry) => ({ time: entry.time, humidity: 62 + (entry.temperature % 5) * 5 })),
    [hourlyForecast],
  )

  const chartRainData = useMemo(
    () => hourlyForecast.map((entry, index) => ({ time: entry.time, rainChance: [10, 25, 30, 45, 60, 80, 50][index] })),
    [hourlyForecast],
  )

  const handleSearch = () => {
    const trimmed = city.trim()
    if (!trimmed) return
    fetchWeather(trimmed)
  }

  const handleUseLocation = () => {
    setCity(defaultCity)
    fetchWeather(defaultCity)
  }

  const toggleFavorite = (cityToToggle = city) => {
    setFavoriteCities((current) => {
      const exists = current.includes(cityToToggle)
      return exists ? current.filter((item) => item !== cityToToggle) : [...current, cityToToggle]
    })
  }

  const favoriteWeatherCards = useMemo(() => {
    const preferred = favoriteCities.length ? favoriteCities : [defaultCity]
    return preferred.slice(0, 4).map((name) => ({
      city: name,
      condition: 'Partly Cloudy',
      temperature: 28,
    }))
  }, [favoriteCities])

  const isFavorite = favoriteCities.includes(city)

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Loading />
      </Box>
    )
  }

  if (error || !weather) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <Alert severity="error" action={<Button onClick={() => fetchWeather(city)}>{t.retry}</Button>}>
          {error || t.unableLoad}
        </Alert>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={{ borderRadius: 4, p: { xs: 2, md: 3 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
          <Stack spacing={0.5}>
            <Typography variant="h4" fontWeight={700}>{weather.city}, {weather.country}</Typography>
            <Typography variant="body2" color="text.secondary">
              {t.lastUpdated}: {weather.updatedAt}
            </Typography>
          </Stack>
          <Chip label={weather.condition} color="primary" variant="outlined" sx={{ alignSelf: 'flex-start' }} />
        </Stack>
      </Card>

      <SearchBar
        value={city}
        onChange={setCity}
        onSearch={handleSearch}
        onUseLocation={handleUseLocation}
        onToggleFavorite={() => toggleFavorite(city)}
        favorite={isFavorite}
        t={t}
      />

      <CurrentWeather weather={weather} t={t} />

      <HourlyForecast forecast={hourlyForecast} t={t} />

      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <WeeklyForecast forecast={weeklyForecast} t={t} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <WeatherStats weather={weather} t={t} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TemperatureChart data={chartTemperatureData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <HumidityChart data={chartHumidityData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <RainChart data={chartRainData} />
        </Grid>
      </Grid>

      <FavoriteCities cities={favoriteWeatherCards} onToggleFavorite={toggleFavorite} favoriteCities={favoriteCities} t={t} />
    </Box>
  )
}

export default Dashboard
