import { FETCH_SCENES } from '../actions/scenes'
import { CREATE_SCENE } from '../actions/scenes'
import { UPDATE_SCENE } from '../actions/scenes'
import { DELETE_SCENE } from '../actions/scenes'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SCENES:
      return _.mapKeys(action.payload.data, 'id')
    case CREATE_SCENE:
    case UPDATE_SCENE:
      const { payload: { data } } = action
      return {
        ...state,
        [data.id]: data
      }
    case DELETE_SCENE:
      return _.omit(state, action.id)
    default:
      return state
  }
}
