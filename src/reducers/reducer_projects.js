import { FETCH_ALL_PROJECTS } from '../actions/projects'
import { FETCH_PROJECT } from '../actions/projects'
import { CREATE_PROJECT } from '../actions/projects'
import { UPDATE_PROJECT } from '../actions/projects'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_PROJECTS:    
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_PROJECT:
    case CREATE_PROJECT:
    case UPDATE_PROJECT:
      const { payload: { data } } = action
      return {
        ...state,
        [data.id]: data
      }
    default:
      return state
  }
}
