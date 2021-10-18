import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import { useStyles } from 'tools/styles/generic/menu.style'
import MenuItems from 'components/utils/MenuItems'

export default function BurgerMenu() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const toggleDrawer = e => setOpen(!open)

  return (
    <>
      <Button className={classes.menu} onClick={toggleDrawer}>
        <MenuIcon />
      </Button>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        anchor='left'
        open={open}
        onClose={toggleDrawer}
        onClick={toggleDrawer}
      >
        <MenuItems />
      </Drawer>
    </>
  )
}
