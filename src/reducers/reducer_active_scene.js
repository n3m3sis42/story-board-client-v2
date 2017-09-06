import { CREATE_SCENE } from '../actions/scenes'
import { UPDATE_SCENE } from '../actions/scenes'
import { SCENE_SELECTED } from '../actions/scenes'
import { SCENE_UNSELECTED } from '../actions/scenes'

export default function (state = {}, action) {
  switch (action.type) {
    case SCENE_SELECTED:
      return action.scene
    case SCENE_UNSELECTED:
      return action.scene
    case CREATE_SCENE:
    case UPDATE_SCENE:
      const { payload: { data } } = action
      return data
    default:
      return state
  }
}
