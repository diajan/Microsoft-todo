import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import Grid from '@mui/material/Grid'
import ListItem from 'components/utils/ListItem'
import { useStyles } from 'tools/styles/menu.style'

export default function Menu() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container direction='column'>
        <List>
          <ListItem
            className={classes.list}
            title='May Day'
            icon={<WbSunnyIcon />}
            key={1}
          />
          <ListItem
            className={classes.list}
            title='May Day'
            icon={<WbSunnyIcon />}
            key={1}
          />
          <ListItem
            className={classes.list}
            title='May Day'
            icon={<WbSunnyIcon />}
            key={1}
          />
          <ListItem
            className={classes.list}
            title='May Day'
            icon={<WbSunnyIcon />}
            key={1}
          />
          <ListItem
            className={classes.list}
            title='May Day'
            icon={<WbSunnyIcon />}
            key={1}
          />
        </List>
      </Grid>
    </Box>
  )
}
