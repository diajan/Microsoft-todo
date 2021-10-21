import { useDispatch, useSelector } from 'react-redux'
import MUIListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { setSelectMenu } from 'redux/actions/menu'
import { useHistory } from 'react-router-dom'

export default function ListItem({
  title,
  subtitle,
  icon,
  keys,
  link,
  ...props
}) {
  const his = useHistory()
  const dispatch = useDispatch()
  const selectMenu = useSelector(s => s.selectMenu)

  const handleSelect = e => {
    dispatch(setSelectMenu(+keys))
  }

  return (
    <MUIListItem key={keys} {...props}>
      <ListItemButton
        onClick={() => his.push(link)}
        onFocus={handleSelect}
        selected={selectMenu === keys}
        className='list-item-button'
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} secondary={subtitle} />
      </ListItemButton>
    </MUIListItem>
  )
}
