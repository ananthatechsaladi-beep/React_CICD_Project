import {
  AcUnit,
  Cloud,
  CloudQueue,
  FlashOn,
  Grain,
  Thunderstorm,
  WbCloudy,
  WbSunny,
  WaterDrop,
} from '@mui/icons-material'
import { Box } from '@mui/material'

const iconMap = {
  Sunny: WbSunny,
  'Partly Cloudy': CloudQueue,
  Cloudy: Cloud,
  Rain: WaterDrop,
  Storm: Thunderstorm,
  Mist: Grain,
  Windy: AcUnit,
  Clear: WbSunny,
  Drizzle: CloudQueue,
  Thunder: FlashOn,
}

export default function WeatherIcon({ condition, fontSize = 40, color = 'primary' }) {
  const IconComponent = iconMap[condition] || WbCloudy
  const iconFontSize = typeof fontSize === 'number' ? `${fontSize}px` : fontSize

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color,
      }}
    >
      <IconComponent fontSize={iconFontSize} color={color} />
    </Box>
  )
}
