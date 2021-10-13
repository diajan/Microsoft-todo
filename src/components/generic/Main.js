import React from 'react'
import Box from '@mui/material/Box'

export default function Main() {
  return (
    <Box
      style={{ backgroundColor: 'red' }}
      component='main'
      sx={{ flexGrow: 1, p: 3 }}
    >
      <DrawerHeader />
    </Box>
  )
}
