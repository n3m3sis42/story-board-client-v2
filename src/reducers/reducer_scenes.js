import { FETCH_SCENES } from '../actions/scenes'
import { CREATE_SCENE } from '../actions/scenes'
import { UPDATE_SCENE } from '../actions/scenes'
import { DELETE_SCENE } from '../actions/scenes'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SCENES:
      console.log(state)
      return _.mapKeys(action.payload.data, 'id')
    case CREATE_SCENE:
      const {payload: {data}} = action
      // allows us to access data directly
    case UPDATE_SCENE:
      // return {...state, scenes: action.payload.data}
    case DELETE_SCENE:
      console.log(state)
    default:
      return state
  }
}
