import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getCurrentWeather, getHourlyForecast, getWeeklyForecast } from '../services/weatherApi'
import CurrentWeather from '../components/weather/CurrentWeather'
import HourlyForecast from '../components/weather/HourlyForecast'
import WeeklyForecast from '../components/weather/WeeklyForecast'
import Loading from '../components/common/Loading'
import { useLanguage } from '../context/LanguageContext'

export default function Forecast() {
  const { t } = useLanguage()
  const [weather, setWeather] = useState(null)
  const [hourlyForecast, setHourlyForecast] = useState([])
  const [weeklyForecast, setWeeklyForecast] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const [current, hourly, weekly] = await Promise.all([
        getCurrentWeather('Bangalore'),
        getHourlyForecast('Bangalore'),
        getWeeklyForecast('Bangalore'),
      ])
      setWeather(current)
      setHourlyForecast(hourly)
      setWeeklyForecast(weekly)
      setLoading(false)
    }

    loadData()
  }, [])

  if (loading || !weather) return <Loading />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <CurrentWeather weather={weather} t={t} />
      <HourlyForecast forecast={hourlyForecast} t={t} />
      <WeeklyForecast forecast={weeklyForecast} t={t} />
    </Box>
  )
}
