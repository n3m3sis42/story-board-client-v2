import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1/projects'

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const CREATE_PROJECT = 'CREATE_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'
export const DELETE_PROJECT = 'DELETE_PROJECT'

export function fetchProjects(project) {
  const request = axios.get(BASE_URL)
  return {
    type: FETCH_PROJECTS,
    payload: request
  }
}

export function createProject(values) {
  const request = axios.post(BASE_URL, values)

  return  {
    type: CREATE_PROJECT,
    payload: request
  }
}

export function updateProject(project) {
  const request = axios.put(`${BASE_URL}/${project.id}`, project)

  return  {
    type: UPDATE_PROJECT,
    payload: request
  }
}

export function deleteProject(id) {
  const request = axios.delete(`${BASE_URL}/${id}`)

  return  {
    type: DELETE_PROJECT,
    payload: request,
    id
  }
}
