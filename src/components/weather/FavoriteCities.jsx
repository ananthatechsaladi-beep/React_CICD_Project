import { Card, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import WeatherIcon from '../common/WeatherIcon'

export default function FavoriteCities({ cities, onToggleFavorite, favoriteCities, t }) {
  return (
    <Card sx={{ borderRadius: 4, p: 1 }}>
      <Stack direction="row" sx={{ px: 2, py: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={700}>{t.favoriteCities}</Typography>
      </Stack>

      <Grid container spacing={2} sx={{ p: 2 }}>
        {cities.map((city) => {
          const isFavorite = favoriteCities.includes(city.city)
          return (
            <Grid item xs={12} sm={6} md={3} key={city.city}>
              <Card variant="outlined" sx={{ borderRadius: 3, p: 1.5 }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                    <WeatherIcon condition={city.condition} fontSize={26} />
                    <Stack>
                      <Typography fontWeight={600}>{city.city}</Typography>
                      <Typography variant="body2" color="text.secondary">{city.condition}</Typography>
                    </Stack>
                  </Stack>
                  <IconButton aria-label={`toggle favorite ${city.city}`} onClick={() => onToggleFavorite(city.city)} color={isFavorite ? 'warning' : 'default'}>
                    {isFavorite ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Stack>
                <Typography variant="h6" sx={{ mt: 1.5, fontWeight: 700 }}>{city.temperature}°C</Typography>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Card>
  )
}
