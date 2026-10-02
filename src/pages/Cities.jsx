import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getCurrentWeather, getSuggestedCities } from '../services/weatherApi'
import WeatherIcon from '../components/common/WeatherIcon'
import Loading from '../components/common/Loading'
import { useLanguage } from '../context/LanguageContext'

export default function Cities() {
  const { t } = useLanguage()
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCities() {
      const names = getSuggestedCities()
      const cityData = await Promise.all(names.map((city) => getCurrentWeather(city)))
      setCities(cityData)
      setLoading(false)
    }

    loadCities()
  }, [])

  if (loading) return <Loading />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h4" fontWeight={700}>{t.cities}</Typography>
      <Grid container spacing={2}>
        {cities.map((city) => (
          <Grid item xs={12} sm={6} md={4} key={city.city}>
            <Card sx={{ borderRadius: 4, p: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" fontWeight={700}>{city.city}</Typography>
                  <WeatherIcon condition={city.condition} fontSize={30} />
                </Box>
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>{city.temperature}°C</Typography>
                <Typography color="text.secondary">{city.condition}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
