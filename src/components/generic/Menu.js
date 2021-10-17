import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search'
import ListItem from 'components/utils/ListItem'
import BurgerMenu from 'components/generic/BurgerMenu'
import { useStyles } from 'tools/styles/menu.style'
import items from 'tools/data/menuItem'
import user from 'tools/data/user'

export default function Menu() {
  const classes = useStyles()

  return (
    <>
      <Box
        className={classes.root}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Stack direction='row' alignItems='center'>
          <ListItem
            className={`${classes.list} ${classes.user}`}
            title={user.fullname}
            subtitle={user.link}
            icon={user.avatar}
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
      </Box>

      <Box
        display={{ sm: 'block', md: 'none' }}
        className={classes.hamburgerMenu}
      >
        <BurgerMenu />
      </Box>
    </>
  )
}