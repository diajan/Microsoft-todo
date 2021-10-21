import {
  initialTodoStorage,
  setTodoStorage,
  editTodoStorage,
  removeTodoStorage,
  doneTodoStorage,
} from 'tools/other/localstorage'

const initialState = initialTodoStorage()

export function todos(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return setTodoStorage(state, payload)

    case 'EDIT_TODO':
      return editTodoStorage(state, payload)

    case 'REMOVE_TODO':
      return removeTodoStorage(state, payload)

    case 'DONE_TODO':
      return doneTodoStorage(state, payload)
    default:
      return state
  }
}
