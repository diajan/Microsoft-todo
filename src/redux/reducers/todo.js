import { setStateUsingKeys } from 'tools/other/functions'
import { initialStorage } from 'tools/other/localstorage'

const initialState = initialStorage() 

export function todos(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return setStateUsingKeys(state, payload.uri, payload.value)

    default:
      return state
  }
}
