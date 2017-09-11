import axios from 'axios'
import API from '../adapters/api'
const BASE_URL = 'http://localhost:3000/api/v1/scenes'

export const FETCH_SCENES = 'FETCH_SCENES'
export const CREATE_SCENE = 'CREATE_SCENE'
export const UPDATE_SCENE = 'UPDATE_SCENE'
export const DELETE_SCENE = 'DELETE_SCENE'

export function fetchScenes(project) {
  // TODO can i dispatch this after project fetch somehow
  return function (dispatch) {
    API.get(BASE_URL)
    .then(response => {
        dispatch({
          type: FETCH_SCENES,
          payload: response
        })
      })
      // TODO code fetchError method
      .catch(response => { console.log(response) })
  }
}

export function createScene(values) {
  return function (dispatch) {
    API.post(BASE_URL, values)
    .then(response => {
        dispatch({
          type: CREATE_SCENE,
          payload: response
        })
      })
      // TODO code fetchError method
      .catch(response => { console.log(response) })
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
