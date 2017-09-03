import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1/scenes'

export const FETCH_SCENES = 'FETCH_SCENES'
export const CREATE_SCENE = 'CREATE_SCENE'
export const SCENE_SELECTED = 'SCENE_SELECTED'
// export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'


export function fetchScenes(project) {
  const request = axios.get(BASE_URL)
  console.log("in fetchScenes")
  return {
    type: FETCH_SCENES,
    payload: request
  }
}

export function createScene(values) {
  const request = axios.post(BASE_URL, values)

  return  {
    type: CREATE_SCENE,
    payload: request
  }
}

// export function selectScene(scene) {
//   console.log("selectScene:", scene.title)
//   return {
//     type: SCENE_SELECTED,
//     scene
//   }
// }
//
// export function clearNotification(notification) {
//   return {
//     type: CLEAR_NOTIFICATION
//   }
// }
