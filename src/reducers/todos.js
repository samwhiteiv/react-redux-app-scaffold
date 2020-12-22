import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../actions/todos'

import {
  RECEIVE_DATA
} from '../actions/shared'

//Reducer functions that takes in state & action and returns the state
export default function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return state.concat([action.todo])
    case REMOVE_TODO:
      return state.filter((todo) => {
        if (todo.id !== action.id) {
          return todo
        } else return null
      })
    case TOGGLE_TODO:
      return state.map((todo) => todo.id !== action.id ? todo : 
        Object.assign({}, todo, { complete: !todo.complete }))
    case RECEIVE_DATA: 
      return action.todos
    default: 
      return state
  }
}