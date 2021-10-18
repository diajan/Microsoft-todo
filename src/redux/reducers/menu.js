export function selectMenu(state = 1, { type, payload }) {
  console.log(payload)
  switch (type) {
    case 'SELECT_MENU':
      return payload

    default:
      return state
  }
}
