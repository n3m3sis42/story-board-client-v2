import { SCENE_SELECTED } from '../actions/scenes'

export default function (state = {}, action) {
  switch (action.type) {
    case SCENE_SELECTED:
      console.log('selectScene', state, action)
      return action.scene
    default:
      return state
  }
}
