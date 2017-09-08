import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1/projects'

// NOTE tested curl 'http://localhost:3000/api/v1/projects/1' and it does return scenes etc correctly -- can add a show action for projects later, may want to use that to pass scene list into SceneContainer instead of the scenes actions/reducer

export const FETCH_PROJECTS = 'FETCH_PROJECTS'
export const CREATE_PROJECT = 'CREATE_PROJECT'
export const UPDATE_PROJECT = 'UPDATE_PROJECT'

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
