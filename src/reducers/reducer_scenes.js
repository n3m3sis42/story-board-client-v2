// NOTE look at this link for examples of how to update scenes array in state nondestructively
// https://github.com/reactjs/redux/blob/master/examples/todomvc/src/reducers/todos.js

import { FETCH_SCENES } from '../actions/scenes'
import { CREATE_SCENE } from '../actions/scenes'
import { DELETE_SCENE } from '../actions/scenes'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SCENES:
      return _.mapKeys(action.payload.data, 'id')
    case CREATE_SCENE:
      console.log(state)
      // return {...state, scenes: action.payload.data}
    case DELETE_SCENE:
      console.log(state)
    default:
      return state
  }
}
