import { SCENE_SELECTED } from '../actions/index'

export default function (state = null, action) {
  switch (action.type) {
    case SCENE_SELECTED:
      return action.scene
    default:
      return state
  }
}
