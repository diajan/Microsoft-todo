import moment from "moment";

export function getNowDate() {
  return moment().format('dddd, MMMM DD')
}
