import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1'

export const AUTH_USER = 'AUTH_USER'
export const UNAUTH_USER = 'UNAUTH_USER'
export const AUTH_ERROR = 'AUTH_ERROR'


export const LOG_OUT = 'LOG_OUT'
export const CREATE_USER = 'CREATE_USER'

export function createUser(data) {
  // NOTE data should be {user: {email: <username>, password: <pwd>, password_confirmation: <pwd>}}
  const request = axios.post(`${BASE_URL}/signup`, data)
  return {
    type: CREATE_USER,
    payload: request
  }
}

export function signUserIn({ email, password }) {
  // TODO get history.push  to work

  return (dispatch) => {
    axios.post(`${BASE_URL}/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.jwt)
        // this.props.history.push('/projects')
      })
      .catch(() => {
        dispatch(authError('Login failed. Please check your email and password and try again.'))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signUserOut() {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}
