import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1/scenes'

export const FETCH_SCENES = 'FETCH_SCENES'
export const CREATE_SCENE = 'CREATE_SCENE'
export const UPDATE_SCENE = 'UPDATE_SCENE'
export const DELETE_SCENE = 'DELETE_SCENE'
export const SCENE_SELECTED = 'SCENE_SELECTED'
export const SCENE_UNSELECTED = 'SCENE_UNSELECTED'

export function fetchScenes(project) {
  const request = axios.get(BASE_URL)
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

export function updateScene(scene) {
  const request = axios.put(`${BASE_URL}/${scene.id}`, scene)

  return  {
    type: UPDATE_SCENE,
    payload: request
  }
}

export function deleteScene(id) {
  const request = axios.delete(`${BASE_URL}/${id}`)

  return  {
    type: DELETE_SCENE,
    payload: request,
    id
  }
}

export function selectScene(scene) {
  return {
    type: SCENE_SELECTED,
    scene
  }
}

export function unselectScene() {
  let scene = {}
  return {
    type: SCENE_UNSELECTED,
    scene
  }
}
