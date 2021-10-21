import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStyles } from 'tools/styles/utils/todo.style'
import EditableText from 'components/utils/EditableText'
import { useDispatch } from 'react-redux'
import { doneTodo, removeTodo } from 'actions/todo'

export default function Todo({ title, id, renderParent }) {
  const { root, container } = useStyles()
  const dispatch = useDispatch()

  const handleDoneTodo = () => dispatch(doneTodo(id))  && renderParent()
  const handleRemoveTodo = () => dispatch(removeTodo(id))

  return (
    <Button className={root} variant='contained'>
      <Box className={container}>
        <CheckCircleOutlineIcon
          id='success'
          sx={{ mr: 2 }}
          onClick={handleDoneTodo}
        />
      </Box>
      <EditableText title={title} id={id} key={id} />
      <Box className={container}>
        <DeleteIcon id='error' onClick={handleRemoveTodo} />
      </Box>
    </Button>
  )
}
