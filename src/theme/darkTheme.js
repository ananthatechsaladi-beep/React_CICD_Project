import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8ac9ff',
      light: '#1d3557',
      dark: '#c8e6ff',
      contrastText: '#edf6ff',
    },
    secondary: {
      main: '#79a7dc',
    },
    background: {
      default: '#0d1b2a',
      paper: '#16283d',
    },
    text: {
      primary: '#edf6ff',
      secondary: '#b8d6f0',
    },
    success: { main: '#4adea7' },
    warning: { main: '#ffca6d' },
    error: { main: '#ff6b6b' },
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
          boxShadow: '0 20px 40px rgba(3, 11, 25, 0.35)',
          border: '1px solid rgba(138, 201, 255, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 14px 32px rgba(3, 11, 25, 0.3)',
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
