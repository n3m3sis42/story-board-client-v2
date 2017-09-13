import API from '../adapters/api'
import * as requests from '../adapters/requests'
const BASE_URL = 'http://localhost:3000/api/v1/scenes'

export const FETCH_SCENES = 'FETCH_SCENES'
export const CREATE_SCENE = 'CREATE_SCENE'
export const UPDATE_SCENE = 'UPDATE_SCENE'
export const DELETE_SCENE = 'DELETE_SCENE'


export function fetchScenes(project) {
  // TODO can i dispatch this after project fetch somehow
  let url = BASE_URL
  return requests.sendGetRequest(url, FETCH_SCENES)
}

export function createScene(values) {
  let url = BASE_URL
  return requests.sendPostRequest(url, CREATE_SCENE, values)
}

export function updateScene(scene) {
  let url = `${BASE_URL}/${scene.id}`
  return requests.sendPutRequest(url, UPDATE_SCENE, scene)
}

export function deleteScene(id) {
  let url = `${BASE_URL}/${id}`
  return requests.sendDeleteRequest(url, DELETE_SCENE, id)
}
