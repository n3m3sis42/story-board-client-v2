import _ from 'lodash';
import axios from 'axios';

const headers = {
  headers: { Authorization: `Token token=${localStorage.getItem('token')}` }
}

const API = {  
  get(url, options = {}) {
    return axios.get(url, _.merge(options, headers))
  },
  post(url, data, options = {}) {
    return axios.post(url, data, _.merge(options, headers))
  }
};

export default API;
