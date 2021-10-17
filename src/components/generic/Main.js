import React from 'react'
import Box from '@mui/material/Box'
import {useStyles} from 'tools/styles/main.style'

export default function Main() {
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
      component='main'
      sx={{ flexGrow: 1, p: 3 , backgroundColor:'public.light'}}
    >
      dsald
    </Box>
  )
}
