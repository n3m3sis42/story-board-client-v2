const baseUrl = 'http://localhost:3000/api/v1/scenes'
const requestHeaders = {
  'content-type': 'application/json',
  'accept': 'application/json'
}

export default class ScenesAdapter {

  static create(data) {
    return (
      fetch(`${baseUrl}`, {
        method: 'post',
        headers: requestHeaders,
        body: JSON.stringify(data)
      })
       .then(resp => resp.json())
    )
  }

  static index() {
    return (
      fetch(`${baseUrl}`)
        .then(resp => resp.json())
    )
  }

  static update(sceneId, data) {
    return (
      fetch(`${baseUrl}/${sceneId}`, {
        method: 'put',
        headers: requestHeaders,
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
    )
  }

  static delete(sceneId, data) {
    return (
      fetch(`${baseUrl}/${sceneId}`, {
        method: 'delete'
      })
        .then(resp => resp)
    )
  }

}
