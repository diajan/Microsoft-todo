import moment from 'moment'
import { setLocalStrage, initialStorage } from './localstorage'

export function getNowDate() {
  return moment().format('dddd, MMMM DD')
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function setStateUsingKeys(state, key, value) {
  state[key] ? (state[key] = [...state[key], value]) : (state[key] = [value])
  setLocalStrage(state)
  return state
}

export function generateId() {
  const uri = window.location.pathname.slice(1) || 'myday'
  const state = initialStorage()
  const data = state[uri]
  return data.length ? data[data.length - 1].id + 1 : 1
}
