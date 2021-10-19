import { generateId } from 'tools/other/functions'

export function setTodo(uri, value) {
  return {
    type: 'ADD_TODO',
    payload: { uri, value: { title: value, id:generateId(), done: false } },
  }
}

