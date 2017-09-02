// NOTE look at this link for examples of how to update scenes array in state nondestructively
// https://github.com/reactjs/redux/blob/master/examples/todomvc/src/reducers/todos.js

import { FETCH_SCENES } from '../actions/index'

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case FETCH_SCENES:
      return action.payload.data
  }
  return state
}
