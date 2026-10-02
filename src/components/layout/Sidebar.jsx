import {
  Dashboard,
  Cloud,
  DateRange,
  Favorite,
  Map,
  Settings,
  TravelExplore,
} from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const navItems = [
  { labelKey: 'dashboard', path: '/', icon: Dashboard },
  { labelKey: 'currentWeather', path: '/current-weather', icon: Cloud },
  { labelKey: 'forecast', path: '/forecast', icon: DateRange },
  { labelKey: 'cities', path: '/cities', icon: TravelExplore },
  { labelKey: 'favorites', path: '/favorites', icon: Favorite },
  { labelKey: 'weatherMaps', path: '/weather-maps', icon: Map },
  { labelKey: 'settings', path: '/settings', icon: Settings },
]

export default function Sidebar({ mobileOpen, onClose, variant }) {
  const { t } = useLanguage()

  const list = (
    <Box sx={{ width: 250, p: 2 }}>
      <Toolbar />
      <Typography variant="h6" fontWeight={700} sx={{ mb: 2, px: 1.5 }}>
        {t.dashboard}
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <List disablePadding>
        {navItems.map(({ labelKey, path, icon: Icon }) => (
          <ListItemButton
            key={path}
            component={NavLink}
            to={path}
            onClick={onClose}
            end={path === '/'}
            sx={({ palette }) => ({
              borderRadius: 2,
              mb: 0.5,
              color: 'text.primary',
              '&.active': {
                backgroundColor: palette.primary.light,
                color: palette.primary.main,
                boxShadow: 'inset 0 0 0 1px rgba(124, 195, 255, 0.2)',
              },
              '&:hover': {
                backgroundColor: palette.mode === 'dark' ? 'rgba(138, 201, 255, 0.08)' : 'rgba(124, 195, 255, 0.08)',
              },
            })}
          >
            <ListItemIcon sx={{ minWidth: 38, color: 'inherit' }}>
              <Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={t[labelKey]} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return variant === 'temporary' ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 250,
          borderRight: 1,
          borderColor: 'divider',
          backgroundColor: 'background.default',
        },
      }}
    >
      {list}
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          borderRight: 1,
          borderColor: 'divider',
          backgroundColor: 'background.default',
        },
      }}
    >
      {list}
    </Drawer>
  )
}
