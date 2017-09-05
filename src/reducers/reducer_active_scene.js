import { SCENE_SELECTED } from '../actions/scenes'
import { SCENE_UNSELECTED } from '../actions/scenes'

export default function (state = {}, action) {
  switch (action.type) {
    case SCENE_SELECTED:
      return action.scene
    case SCENE_UNSELECTED:
      return action.scene
    default:
      return state
  }
}
