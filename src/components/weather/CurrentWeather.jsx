import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import { DeviceThermostat, Compress, Explore, WaterDrop, WindPower, Visibility, WbSunny } from '@mui/icons-material'
import WeatherIcon from '../common/WeatherIcon'

export default function CurrentWeather({ weather, t }) {
  return (
    <Card sx={{ p: { xs: 2, md: 3 }, background: 'linear-gradient(135deg, rgba(124,195,255,0.14), rgba(255,255,255,0.9))', borderRadius: 4 }}>
      <Grid container spacing={3} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.2 }}>
              {t.currentWeather}
            </Typography>
            <Typography variant="h3" fontWeight={700}>
              {weather.city}, {weather.country}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <WeatherIcon condition={weather.condition} fontSize={52} color="primary" />
              <Typography variant="h1" sx={{ fontSize: { xs: '3.2rem', md: '4.6rem' } }}>
                {weather.temperature}°C
              </Typography>
            </Stack>
            <Typography variant="h5" color="text.secondary">
              {weather.condition}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1.5} sx={{ py: 1 }}>
            <StatRow icon={<DeviceThermostat color="primary" />} label={t.feelsLike} value={`${weather.feelsLike}°C`} />
            <StatRow icon={<WaterDrop color="primary" />} label={t.humidity} value={`${weather.humidity}%`} />
            <StatRow icon={<WindPower color="primary" />} label={t.windSpeed} value={`${weather.wind} km/h`} />
            <StatRow icon={<Compress color="primary" />} label={t.pressure} value={`${weather.pressure} hPa`} />
            <StatRow icon={<Visibility color="primary" />} label={t.visibility} value={`${weather.visibility} km`} />
            <StatRow icon={<WbSunny color="primary" />} label={t.uvIndex} value={weather.uvIndex} />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}

function StatRow({ icon, label, value }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5, py: 0.4 }}>
      <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 2, backgroundColor: 'primary.light' }}>
          {icon}
        </Box>
        <Typography color="text.secondary">{label}</Typography>
      </Stack>
      <Typography fontWeight={600}>{value}</Typography>
    </Box>
  )
}
