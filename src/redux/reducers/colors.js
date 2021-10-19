export function colors(state = null, { type, payload }) {
  switch (type) {
    case 'COLORS':
      return payload

    default:
      return state
  }
}

export function currentColor(state = null, { type, payload }) {
  switch (type) {
    case 'CURRENT_COLOR':
      return payload

    default:
      return state
  }
}
