import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7cc3ff',
      light: '#dfeeff',
      dark: '#3a8ae6',
      contrastText: '#0d1b2a',
    },
    secondary: {
      main: '#8fd3ff',
    },
    background: {
      default: '#edf7ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#102a43',
      secondary: '#52677d',
    },
    success: { main: '#2cc7a6' },
    warning: { main: '#ffb84d' },
    error: { main: '#ef5b5b' },
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: 'Inter, "Segoe UI", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 18px 45px rgba(50, 100, 170, 0.08)',
          border: '1px solid rgba(124, 195, 255, 0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 12px 30px rgba(80, 125, 180, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
})
