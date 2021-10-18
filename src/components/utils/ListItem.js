import { useDispatch, useSelector } from 'react-redux'
import MUIListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { setSelectMenu } from 'actions/menu'

export default function ListItem({ title, subtitle, icon, keys, ...props }) {
  const dispatch = useDispatch()
  const selectMenu = useSelector(s => s.selectMenu)

  const handleSelect = e => {
    dispatch(setSelectMenu(+keys))
  }

  console.log('render')
  return (
    <MUIListItem key={keys} {...props}>
      <ListItemButton
        onFocus={handleSelect}
        selected={selectMenu===keys}
        className='list-item-button'
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} secondary={subtitle} />
      </ListItemButton>
    </MUIListItem>
  )
}
