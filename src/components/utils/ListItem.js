import React from 'react'
import MUIListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export default function ListItem({ title, subtitle, icon, key, ...props }) {
  return (
    <MUIListItem key={key} {...props}>
      <ListItemButton className='list-item-button'>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} secondary={subtitle} />
      </ListItemButton>
    </MUIListItem>
  )
}
