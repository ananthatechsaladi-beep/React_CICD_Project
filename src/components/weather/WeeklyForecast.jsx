import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import WeatherIcon from '../common/WeatherIcon'

export default function WeeklyForecast({ forecast, t }) {
  return (
    <Card sx={{ p: 0.5, borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          {t.weeklyForecast}
        </Typography>

        <Grid container spacing={1.5}>
          {forecast.map((day) => (
            <Grid item xs={12} sm={6} md={4} lg={12} key={day.day}>
              <Card variant="outlined" sx={{ borderRadius: 3, p: 1.5 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <WeatherIcon condition={day.condition} fontSize={28} />
                    <BoxText label={day.day} value={day.condition} />
                  </Stack>
                  <Typography variant="body1" fontWeight={600}>{day.high}° / {day.low}°</Typography>
                  <Typography variant="body2" color="text.secondary">{t.rainChance}: {day.rainChance}%</Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

function BoxText({ label, value }) {
  return (
    <Stack>
      <Typography fontWeight={600}>{label}</Typography>
      <Typography variant="body2" color="text.secondary">{value}</Typography>
    </Stack>
  )
}
