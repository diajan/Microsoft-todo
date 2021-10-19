import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useStyles } from 'tools/styles/utils/todo.style'

export default function Todo({ title, key }) {
  const { root, container } = useStyles()
  return (
    <Button className={root} key={key} variant='contained'>
      <Box className={container}>
        <CheckCircleOutlineIcon
          id='success'
          sx={{ mr: 2 }}
          onClick={e => console.log(e.target.parentElement.remove())}
        />
        {title}
      </Box>
      <Box className={container}>
        <EditIcon
          id='info'
          onClick={e => console.log(e.target.parentElement.remove())}
        />
        <DeleteIcon
          id='error'
          onClick={e => console.log(e.target.parentElement.remove())}
        />
      </Box>
    </Button>
  )
}
