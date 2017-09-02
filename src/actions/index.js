import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1/scenes'

export const SCENE_SELECTED = 'SCENE_SELECTED'
export const FETCH_SCENES = 'FETCH_SCENES'

export function selectScene(scene) {
  return {
    type: SCENE_SELECTED,
    scene
  }
}

export function fetchScenes(project) {
  const request = axios.get(BASE_URL)
  console.log("in fetchScenes")
  return {
    type: FETCH_SCENES,
    payload: request
  }
}
