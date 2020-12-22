import {
  ADD_GOAL,
  REMOVE_GOAL,
} from '../actions/goals'

import {
  RECEIVE_DATA
} from '../actions/shared'

export default function goals(state = [], action) {
  switch(action.type) {
    case ADD_GOAL:
      return state.concat([action.goal])
    case REMOVE_GOAL:
      return state.filter((goal) => {
        if(goal.id !== action.id) {
          return goal
        } else return null
      })
    case RECEIVE_DATA: 
      return action.goals
    default:
      return state
  }
}