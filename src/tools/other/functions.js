import moment from 'moment'
import { initialTodoStorage } from './localstorage'

export function getNowDate() {
  return moment().format('dddd, MMMM DD')
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function generateId() {
  const state = initialTodoStorage()
  return state.length ? state[state.length - 1].id + 1 : 1
}

export function getUri() {
  return window.location.pathname.slice(1) || 'myday'
}
