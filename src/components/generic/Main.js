import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Input from 'components/utils/Input'
import Theme from 'components/utils/Theme'
import { useStyles } from 'tools/styles/generic/main.style'
import { getNowDate, capitalize } from 'tools/other/functions'
import bg from 'tools/themes/background'

export default function Main() {
  const classes = useStyles()
  const selectMenu = useSelector(s => s.selectMenu)
  const { pathname } = useLocation()
  const title = pathname.slice(1)

  return (
    <Box className={classes.root} component='main'>
      <Box
        className={classes.container}
        sx={{
          padding: { xs: '5rem 2rem 0 ', md: '2rem 2rem 0 ' },
          backgroundImage: `url(${bg[`bg${selectMenu}`]})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <Box className={classes.title}>
          <Typography
            variant='h4'
            component='div'
            children={capitalize(title) || 'My day'}
          />
          <Typography
            variant='subtitle1'
            gutterBottom
            component='div'
            children={getNowDate()}
          />
        </Box>
        <Theme />
        <Input placeholder='Add Todo' />
      </Box>
    </Box>
  )
}
