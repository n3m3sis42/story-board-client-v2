export default function (state = null, action) {
  switch (action.type) {
    case 'SCENE_SELECTED':
      return action.scene
  }
  return state
}
