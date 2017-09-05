import { FETCH_PROJECTS } from '../actions/projects'
import { CREATE_PROJECT } from '../actions/projects'
import { UPDATE_PROJECT } from '../actions/projects'
import { DELETE_PROJECT } from '../actions/projects'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return _.mapKeys(action.payload.data, 'id')
    case CREATE_PROJECT:
    case UPDATE_PROJECT:
      const { payload: { data } } = action
      return {
        ...state,
        [data.id]: data
      }
    case DELETE_PROJECT:
      return _.omit(state, action.id)
    default:
      return state
  }
}
