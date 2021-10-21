import { generateId } from 'tools/other/functions'

export function setTodo(uri, title) {
  return {
    type: 'ADD_TODO',
    payload: { title, id: generateId(), uri, done: false },
  }
}

export function editTodo(id, newVal) {
  return {
    type: 'EDIT_TODO',
    payload: { newVal, id },
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: { id },
  }
}

export function doneTodo(id) {
  return {
    type: 'DONE_TODO',
    payload: { id },
  }
}
