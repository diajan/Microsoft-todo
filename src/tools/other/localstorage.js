import { KEY } from 'tools/data/constant'

// -----------PUBLIC

export function getLocalStorage(key = KEY) {
  return JSON.parse(localStorage.getItem(key))
}

export function setLocalStrorge(data, key = KEY) {
  localStorage.setItem(key, JSON.stringify(data))
}

// ------------MENU

export function setSelectMenuStorage(payload) {
  setLocalStrorge(payload, 'currentMenu')
  return payload
}

// ------------TODO

const initialState = []

export function initialTodoStorage() {
  if (!getLocalStorage()) {
    setLocalStrorge(initialState)
    setSelectMenuStorage(1)
    return initialState
  }
  return getLocalStorage()
}

export function setTodoStorage(state, payload) {
  const newState = [...state, payload]
  setLocalStrorge(newState)
  return newState
}

export function editTodoStorage(state, { id, newVal }) {
  state.filter(todo => todo.id === id && (todo['title'] = newVal))
  setLocalStrorge(state)
  return state
}

export function removeTodoStorage(state, { id }) {
  const newState = state.filter(todo => todo.id !== id)
  setLocalStrorge(newState)
  return newState
}

export function doneTodoStorage(state, { id }) {
  state.filter(todo => todo.id === id && (todo['done'] = !todo.done))
  setLocalStrorge(state)
  return state
}
