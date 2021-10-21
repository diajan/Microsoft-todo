import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { useStyles } from 'tools/styles/utils/input.style'
import DirectionsIcon from '@mui/icons-material/Directions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTodo } from 'actions/todo'
import { getUri } from 'tools/other/functions'

export default function Input({ placeholder, renderParent }) {
  const { root } = useStyles()
  const [title, setTitle] = useState()
  const dispatch = useDispatch()
  const uri = getUri()

  const handleSubmit = e => {
    e.preventDefault()
    renderParent()
    title && dispatch(setTodo(uri, title))
    setTitle('')
  }

  const handleInput = e => {
    setTitle(e.target.value)
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      className={root}
      sx={{
        transform: { xs: 'translateY(10vh)', md: 'translateY(5vh)' },
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <CircleOutlinedIcon />
      </IconButton>
      <InputBase
        onChange={handleInput}
        value={title}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='submit'>
        <DirectionsIcon />
      </IconButton>
    </Paper>
  )
}
