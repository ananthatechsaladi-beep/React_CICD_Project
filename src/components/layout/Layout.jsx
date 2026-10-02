import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Header onMenuToggle={() => setMobileOpen((prev) => !prev)} />
      <Sidebar variant="permanent" onClose={() => setMobileOpen(false)} />
      <Sidebar variant="temporary" mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 3 },
          py: { xs: 10, md: 12 },
          minWidth: 0,
          width: '100%',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
