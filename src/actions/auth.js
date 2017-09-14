import API from '../adapters/api'

const BASE_URL = 'http://localhost:3000/api/v1'

export const AUTH_USER = 'AUTH_USER'
export const UNAUTH_USER = 'UNAUTH_USER'
export const AUTH_ERROR = 'AUTH_ERROR'

export function sendAuthRequest(url, data = {}, message) {
  return function (dispatch) {
    API.post(url, data)
    .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.jwt)
      })
      .catch(response => {
        let error = message ? message : response
        console.log(error)
        dispatch(authError(error))
      })
  }
}

export function signUserUp({ email, password }) {
  let url = `${BASE_URL}/signup`
  return sendAuthRequest(url, {user: { email, password }})
}

export function signUserIn({ email, password }) {
  let url = `${BASE_URL}/login`
  let message = "Login failed. Please check your email and password and try again."
  return sendAuthRequest(url, { email, password }, message)
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
