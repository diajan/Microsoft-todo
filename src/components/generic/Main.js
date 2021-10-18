import { useSelector } from 'react-redux'
import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Input from 'components/utils/Input'
import { useStyles } from 'tools/styles/generic/main.style'
import { getNowDate } from 'tools/other/time'
import bg from 'tools/themes/background'

export default function Main() {
  const selectMenu = useSelector(s => s.selectMenu)
  const classes = useStyles()

  return (
    <Box className={classes.root} component='main' sx={{ height: 'auto' }}>
      <Card className={classes.bg}>
        <CardMedia
          sx={{
            width: { xs: 'auto', lg: '100%' },
          }}
          component='img'
          image={bg[`bg${selectMenu || 1}`]}
          alt='bitch'
        />
      </Card>
      <Box
        className={classes.container}
        sx={{ padding: { xs: '5rem 2rem 0 ', md: '2rem 2rem 0 ' } }}
      >
        <Box className={classes.title}>
          <Typography variant='h4' component='div' children='My day' />
          <Typography
            variant='subtitle1'
            gutterBottom
            component='div'
            children={getNowDate()}
          />
        </Box>

        <Input />
      </Box>
    </Box>
  )
}
