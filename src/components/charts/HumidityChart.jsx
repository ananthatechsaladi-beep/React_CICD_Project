import { Card, CardContent, Typography } from '@mui/material'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function HumidityChart({ data }) {
  return (
    <Card sx={{ borderRadius: 4, height: 300 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Humidity trend</Typography>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={data}>
            <XAxis dataKey="time" stroke="rgba(128, 150, 170, 0.8)" />
            <YAxis stroke="rgba(128, 150, 170, 0.8)" />
            <Tooltip />
            <Area type="monotone" dataKey="humidity" stroke="#6bb6ff" fill="#dfeeff" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
