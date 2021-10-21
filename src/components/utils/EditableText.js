import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import TextField from '@mui/material/TextField'
import { editTodo } from 'redux/actions/todo'
import { useDispatch } from 'react-redux'

export default function EditableText({ title, id }) {
  const [input, setInput] = useState(false)
  let [text, setText] = useState(title)

  const dispatch = useDispatch()

  const handleInput = e => setText(e.target.value)

  const changeStatusInput = e => {
    if (e.type === 'keyup' && e.key === 'Enter') {
      setInput(false)
      dispatch(editTodo(id, text))
    } else if (e.type === 'click' || e.type === 'blur') {
      setInput(!input)
    }
  }

  return (
    <div
      data-testid='parent'
      style={{
        display: 'flex',
        width: '-webkit-fill-available',
        justifyContent: 'space-between',
      }}
    >
      {input ? (
        <TextField
          data-testid='input'
          id='standard-basic'
          variant='standard'
          value={text}
          onBlur={changeStatusInput}
          onKeyUp={changeStatusInput}
          onChange={handleInput}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}
      <EditIcon data-testid='edit-btn' id='info' onClick={changeStatusInput} />
    </div>
  )
}
