import { AUTH_USER } from '../actions/auth'
import { UNAUTH_USER } from '../actions/auth'
import { AUTH_ERROR } from '../actions/auth'
import _ from 'lodash'

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
    console.log("error")
      return { ...state, error: action.payload }
    default:
      return state
  }
}
