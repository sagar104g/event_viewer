import { combineReducers } from 'redux'
import events from './events'
import tabSelection from './tabSelection'

export default combineReducers({
  events,
  tabSelection
})