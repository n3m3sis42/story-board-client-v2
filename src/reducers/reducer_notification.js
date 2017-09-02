import { CLEAR_NOTIFICATION } from '../actions/index'

export default function (state = '', action) {
  switch (action.type) {
    case CLEAR_NOTIFICATION:
      return ''
    default:
      return state
  }
}
