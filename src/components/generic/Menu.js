import Box from '@mui/material/Box'
import MenuItems from 'components/utils/MenuItems'
import BurgerMenu from 'components/generic/BurgerMenu'
import { useStyles } from 'tools/styles/generic/menu.style'

export default function Menu() {
  const classes = useStyles()

  return (
    <>
      <Box
        className={classes.root}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <MenuItems />
      </Box>

      <Box
        display={{ xs: 'block', md: 'none' }}
        className={classes.hamburgerMenu}
      >
        <BurgerMenu />
      </Box>
    </>
  )
}
