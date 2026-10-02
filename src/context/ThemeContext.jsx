import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'
import { lightTheme } from '../theme/lightTheme'
import { darkTheme } from '../theme/darkTheme'

const ThemeContext = createContext(null)

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('weather-theme')
    return savedMode || 'light'
  })

  useEffect(() => {
    localStorage.setItem('weather-theme', mode)
  }, [mode])

  const theme = useMemo(
    () => createTheme(mode === 'dark' ? darkTheme : lightTheme),
    [mode],
  )

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode: () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  )

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider')
  }

  return context
}
