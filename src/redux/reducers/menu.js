import { setSelectMenuStorage, getLocalStorage } from 'tools/other/localstorage'

export function selectMenu(state = getLocalStorage('currentMenu'),{ type, payload }) {
  switch (type) {
    case 'SELECT_MENU':
      return setSelectMenuStorage(payload)

    default:
      return state
  }
}
