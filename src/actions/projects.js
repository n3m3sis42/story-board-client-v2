import axios from 'axios'
import * as requests from '../adapters/requests'
const BASE_URL = 'http://localhost:3000/api/v1/projects'

// NOTE tested curl 'http://localhost:3000/api/v1/projects/1' and it does return scenes etc correctly -- can add a show action for projects later, may want to use that to pass scene list into SceneContainer instead of the scenes actions/reducer

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const CREATE_PROJECT = 'CREATE_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export function fetchProjects() {
  let url = BASE_URL
  return requests.sendGetRequest(url, FETCH_PROJECTS)
}

export function createProject(values, callback) {
  let url = BASE_URL
  return requests.sendPostRequest(url, CREATE_PROJECT, values, callback)
}

export function updateProject(project) {
  let url = `${BASE_URL}/${project.id}`
  return requests.sendPutRequest(url, UPDATE_PROJECT, project)
}
