import { Card, CardContent, Typography } from '@mui/material'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function TemperatureChart({ data }) {
  return (
    <Card sx={{ borderRadius: 4, height: 300 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Temperature trend</Typography>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="rgba(128, 150, 170, 0.8)" />
            <YAxis stroke="rgba(128, 150, 170, 0.8)" />
            <Tooltip />
            <Line type="monotone" dataKey="temperature" stroke="#7cc3ff" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
