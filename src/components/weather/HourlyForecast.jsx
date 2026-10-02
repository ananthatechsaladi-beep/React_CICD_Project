import { Card, CardContent, Stack, Typography } from '@mui/material'
import WeatherIcon from '../common/WeatherIcon'

export default function HourlyForecast({ forecast, t }) {
  return (
    <Card sx={{ p: 0.5, borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          {t.hourlyForecast}
        </Typography>

        <Stack direction="row" spacing={1.5} sx={{ overflowX: 'auto', pb: 1 }}>
          {forecast.map((item) => (
            <Card key={item.time} sx={{ minWidth: 110, borderRadius: 3, p: 1.5, backgroundColor: 'background.paper' }}>
              <Stack spacing={0.8} sx={{ alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary">{item.time}</Typography>
                <WeatherIcon condition={item.condition} fontSize={28} />
                <Typography variant="h6" fontWeight={700}>{item.temperature}°C</Typography>
              </Stack>
            </Card>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}
