import { combineReducers } from 'redux'
import { selectMenu } from './menu'
import { colors, currentColor } from './colors'

const reducers = combineReducers({ selectMenu, colors, currentColor })

export default reducers
