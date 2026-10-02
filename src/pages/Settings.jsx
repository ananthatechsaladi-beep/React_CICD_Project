import { Card, CardContent, Grid, MenuItem, Select, Stack, Switch, Typography } from '@mui/material'
import { useLanguage } from '../context/LanguageContext'
import { useThemeMode } from '../context/ThemeContext'

export default function Settings() {
  const { language, setLanguage, t } = useLanguage()
  const { mode, toggleMode } = useThemeMode()

  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>{t.settings}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>{t.language}</Typography>
              <Select value={language} onChange={(event) => setLanguage(event.target.value)} fullWidth>
                <MenuItem value="en">{t.english}</MenuItem>
                <MenuItem value="hi">{t.hindi}</MenuItem>
                <MenuItem value="te">{t.telugu}</MenuItem>
              </Select>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{t.theme}</Typography>
                <Switch checked={mode === 'dark'} onChange={toggleMode} color="primary" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}
