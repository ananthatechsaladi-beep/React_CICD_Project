import { DarkMode, LightMode, Language, NotificationsNone, Person } from '@mui/icons-material'
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useLanguage } from '../../context/LanguageContext'
import { useThemeMode } from '../../context/ThemeContext'

export default function Header({ onMenuToggle }) {
  const theme = useTheme()
  const { mode, toggleMode } = useThemeMode()
  const { language, setLanguage, t } = useLanguage()

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(18px)',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(13, 27, 42, 0.82)' : 'rgba(237, 247, 255, 0.76)',
        borderBottom: 1,
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 72, md: 80 }, px: { xs: 2, md: 3 } }}>
        <Stack direction="row" spacing={1.5} sx={{ flexGrow: 1, minWidth: 0, alignItems: 'center' }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #7cc3ff, #3a8ae6)',
              color: '#fff',
              boxShadow: '0 10px 25px rgba(79, 151, 238, 0.35)',
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2204/2204346.png"
              alt="Weather logo"
              style={{ width: 22, height: 22, filter: 'brightness(0) invert(1)' }}
            />
          </Box>

          <Typography variant="h6" fontWeight={700} noWrap>
            {t.appName}
          </Typography>
        </Stack>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5, minWidth: 0, mx: 2 }}>
          <TextField
            size="small"
            placeholder={t.searchCity}
            aria-label={t.searchCity}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Language fontSize="small" color="primary" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ width: { md: 260, lg: 320 }, '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
          />
        </Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            size="small"
            aria-label={t.language}
            sx={{ minWidth: 96, borderRadius: 2 }}
          >
            <MenuItem value="en">{t.english}</MenuItem>
            <MenuItem value="hi">{t.hindi}</MenuItem>
            <MenuItem value="te">{t.telugu}</MenuItem>
          </Select>

          <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
            <IconButton onClick={toggleMode} color="primary" aria-label="toggle theme">
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>

          <IconButton color="primary" aria-label={t.profile}>
            <Person />
          </IconButton>

          <IconButton sx={{ display: { xs: 'inline-flex', md: 'none' } }} color="primary" onClick={onMenuToggle} aria-label="Open navigation menu">
            <NotificationsNone />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
