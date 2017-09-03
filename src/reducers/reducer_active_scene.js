import { SCENE_SELECTED } from '../actions'

export default function (state = {}, action) {
  console.log('selectScene', state)
  switch (action.type) {
    case SCENE_SELECTED:
      return action.scene
    default:
      return state
  }
}
