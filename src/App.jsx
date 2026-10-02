import { Box, Typography } from '@mui/material'
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeModeProvider } from './context/ThemeContext'
import Dashboard from './pages/Dashboard'
import Forecast from './pages/Forecast'
import Cities from './pages/Cities'
import Settings from './pages/Settings'

function PlaceholderPage({ title }) {
  const { t } = useLanguage()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" fontWeight={700}>{title || t.dashboard}</Typography>
      <Typography color="text.secondary">This section is ready for future weather widgets and deeper map integrations.</Typography>
    </Box>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeModeProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/current-weather" element={<PlaceholderPage title="Current Weather" />} />
              <Route path="/forecast" element={<Forecast />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/favorites" element={<PlaceholderPage title="Favorites" />} />
              <Route path="/weather-maps" element={<PlaceholderPage title="Weather Maps" />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </ThemeModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
