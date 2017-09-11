import API from './api'

export function sendGetRequest(url, actionType, data = {}) {
  return function (dispatch) {
    API.get(url)
    .then(response => {
        dispatch({
          type: actionType,
          payload: response
        })
      })
      // TODO code fetchError method
      .catch(response => { console.log(response) })
  }
}

export function sendPostRequest(url, actionType, data = {}) {
  return function (dispatch) {
    API.post(url, data)
    .then(response => {
        dispatch({
          type: actionType,
          payload: response
        })
      })
      // TODO code fetchError method
      .catch(response => { console.log(response) })
  }
}

export function sendPutRequest(url, actionType, data = {}) {
  return function (dispatch) {
    API.put(url, data)
    .then(response => {
        dispatch({
          type: actionType,
          payload: response
        })
      })
      // TODO code fetchError method
      .catch(response => { console.log(response) })
  }
}

export function sendDeleteRequest(url, actionType, id) {
  return function (dispatch) {
    API.delete(url, id)
    .then(response => {
        dispatch({
          type: actionType,
          payload: response,
          id
        })
      })
      // TODO code fetchError method
      .catch(response => { console.log(response) })
  }
}
