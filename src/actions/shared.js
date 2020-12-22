import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

//Actions
//action for receiving multiple actions
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

//Action creators
export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      console.log('Todos', todos)
      console.log('Goals', goals)
      dispatch(receiveData(todos, goals))
    })
  }
}