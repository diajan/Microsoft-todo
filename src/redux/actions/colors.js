export function setColors(payload) {
  return {
    type: 'COLORS',
    payload,
  }
}

export function setCurrentColor(payload) {
  return {
    type: 'CURRENT_COLOR',
    payload,
  }
}
