import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import SearchIcon from '@mui/icons-material/Search'
import ListItem from 'components/utils/ListItem'
import user from 'tools/data/user'
import items from 'tools/data/menuItem'
import { useStyles } from 'tools/styles/generic/menu.style'

export default function MenuItems() {
  const classes = useStyles()

  return (
    <>
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

      {items.map(({ title, icon, key, link }) => (
        <ListItem
          key={key}
          className={classes.list}
          title={title}
          icon={icon}
          id={key}
          link={link}
        />
      ))}
      <Divider />
    </>
  )
}
