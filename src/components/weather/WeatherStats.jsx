import { BarChart, Compress, Thermostat, Visibility, WaterDrop, WbSunny, WindPower } from '@mui/icons-material'
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'

const statConfig = [
  { key: 'humidity', label: 'Humidity', value: '72%', icon: WaterDrop },
  { key: 'windSpeed', label: 'Wind Speed', value: '14 km/h', icon: WindPower },
  { key: 'pressure', label: 'Pressure', value: '1012 hPa', icon: Compress },
  { key: 'visibility', label: 'Visibility', value: '8 km', icon: Visibility },
  { key: 'uvIndex', label: 'UV Index', value: '6', icon: WbSunny },
  { key: 'sunrise', label: 'Sunrise', value: '6:02 AM', icon: Thermostat },
  { key: 'sunset', label: 'Sunset', value: '6:08 PM', icon: BarChart },
]

export default function WeatherStats({ weather, t }) {
  const stats = [
    { label: t.humidity, value: `${weather.humidity}%`, icon: WaterDrop },
    { label: t.windSpeed, value: `${weather.wind} km/h`, icon: WindPower },
    { label: t.pressure, value: `${weather.pressure} hPa`, icon: Compress },
    { label: t.visibility, value: `${weather.visibility} km`, icon: Visibility },
    { label: t.uvIndex, value: weather.uvIndex, icon: WbSunny },
    { label: t.sunrise, value: weather.sunrise, icon: Thermostat },
    { label: t.sunset, value: weather.sunset, icon: BarChart },
  ]

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          {t.weatherStats}
        </Typography>
        <Grid container spacing={2}>
          {stats.map(({ label, value, icon: Icon }) => (
            <Grid item xs={12} sm={6} md={4} key={label}>
              <Card variant="outlined" sx={{ borderRadius: 3, backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <BoxIcon>
                      <Icon color="primary" />
                    </BoxIcon>
                    <Stack>
                      <Typography variant="body2" color="text.secondary">{label}</Typography>
                      <Typography variant="h6" fontWeight={700}>{value}</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

function BoxIcon({ children }) {
  return (
    <div style={{
      width: 42,
      height: 42,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(124,195,255,0.2), rgba(124,195,255,0.05))',
    }}>
      {children}
    </div>
  )
}
