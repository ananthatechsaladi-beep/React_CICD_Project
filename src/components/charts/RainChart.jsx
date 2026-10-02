import { Card, CardContent, Typography } from '@mui/material'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function RainChart({ data }) {
  return (
    <Card sx={{ borderRadius: 4, height: 300 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Rain probability</Typography>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data}>
            <XAxis dataKey="time" stroke="rgba(128, 150, 170, 0.8)" />
            <YAxis stroke="rgba(128, 150, 170, 0.8)" />
            <Tooltip />
            <Bar dataKey="rainChance" fill="#8ec5ff" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
