import { Search, MyLocation, StarBorder } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material'

export default function SearchBar({
  value,
  onChange,
  onSearch,
  onUseLocation,
  onToggleFavorite,
  favorite,
  t,
}) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: '100%', alignItems: 'stretch' }}>
      <TextField
        fullWidth
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.searchCity}
        aria-label={t.searchCity}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search color="primary" />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            backgroundColor: 'background.paper',
          },
        }}
      />

      <Button variant="contained" onClick={onSearch} startIcon={<Search />} sx={{ minWidth: 120 }}>
        {t.search}
      </Button>

      <Tooltip title={t.myLocation}>
        <IconButton onClick={onUseLocation} color="primary" aria-label={t.myLocation} sx={{ border: 1, borderColor: 'primary.main' }}>
          <MyLocation />
        </IconButton>
      </Tooltip>

      <Tooltip title={t.favoriteLocation}>
        <IconButton onClick={onToggleFavorite} color={favorite ? 'warning' : 'default'} aria-label={t.favoriteLocation} sx={{ border: 1, borderColor: favorite ? 'warning.main' : 'divider' }}>
          <StarBorder />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}
