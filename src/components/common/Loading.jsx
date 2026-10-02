import { Box, Skeleton, Stack } from '@mui/material'

export default function Loading() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 3 }} />
      <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 3 }} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 2 }}>
        {[1, 2, 3, 4].map((item) => (
          <Skeleton key={item} variant="rectangular" height={140} sx={{ borderRadius: 3 }} />
        ))}
      </Box>
    </Stack>
  )
}
