import { KEY } from 'tools/data/constant'

const initialState = {
  myday: [],
  important: [],
  planned: [],
  tasks: [],
}

export function initialStorage() {
  if (!getLocalStorage()) {
    setLocalStrage(initialState)
    return initialState
  }
  return getLocalStorage()
}

export function getLocalStorage(key = KEY) {
  return JSON.parse(localStorage.getItem(key))
}

export function setLocalStrage(data, key = KEY) {
  localStorage.setItem(key, JSON.stringify(data))
}
