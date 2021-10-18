import moment from 'moment'

export function getNowDate() {
  return moment().format('dddd, MMMM DD')
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
