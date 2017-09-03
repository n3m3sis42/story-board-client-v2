export const SCENE_SELECTED = 'SCENE_SELECTED'

export function selectScene(scene) {
  console.log("selectScene:", scene.title)
  return {
    type: SCENE_SELECTED,
    scene
  }
}

// export function clearNotification(notification) {
//   return {
//     type: CLEAR_NOTIFICATION
//   }
// }
