import React from 'react'
import MUIListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export default function ListItem({title,icon,key,...props}) {
  return (
    <MUIListItem key={key} {...props}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={title}/>
    </MUIListItem>
  )
}
