import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import ListItem from 'components/utils/ListItem'
import { useStyles } from 'tools/styles/generic/menu.style'
import items from 'tools/data/menuItem'
import user from 'tools/data/user'

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
      >
        <Stack direction='row' alignItems='center'>
          <ListItem
            onClick={() => window.location.replace(`https://${user.link}`)}
            className={`${classes.list} ${classes.user}`}
            title={user.fullname}
            subtitle={user.link}
            icon={user.avatar}
            keys='user'
          />
          <SearchIcon className={classes.search} />
        </Stack>

        {items.map(({ title, icon, key }) => (
          <ListItem
            className={classes.list}
            title={title}
            icon={icon}
            key={key}
          />
        ))}
        <Divider />
      </Drawer>
    </>
  )
}
