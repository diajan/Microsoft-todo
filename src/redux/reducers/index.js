import { combineReducers } from 'redux'
import { selectMenu } from './menu'
import { colors, currentColor } from './colors'
import { todos } from './todo'

const reducers = combineReducers({ selectMenu, colors, currentColor, todos })

export default reducers
