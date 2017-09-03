import { SCENE_SELECTED } from '../actions/index'
import initialState from './initialState'

export default function (state = initialState.activeScene, action) {
  console.log('selectScene', state)
  switch (action.type) {
    case SCENE_SELECTED:
      return action.scene
    default:
      return state
  }
}
