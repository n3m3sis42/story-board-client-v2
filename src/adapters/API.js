import _ from 'lodash';
import axios from 'axios';

export default class API {

  static headers() {
    return {
      headers: { Authorization: `Token token=${localStorage.getItem('token')}` }
    }
  }

  static get(url, options = {}) {
    return axios.get(url, _.merge(options, this.headers()))
  }

  static post(url, data, options = {}) {
    return axios.post(url, data, _.merge(options, this.headers()))
  }

  static put(url, data, options = {}) {
    return axios.put(url, data, _.merge(options, this.headers()))
  }

  static delete(url) {
    return axios.delete(url, this.headers())
  }

}
