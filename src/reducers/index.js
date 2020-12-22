import { combineReducers } from 'redux'

import todos from './todos'
import goals from './goals'
import isLoading from './loading'

export default combineReducers({
  todos,
  goals,
  isLoading
})
