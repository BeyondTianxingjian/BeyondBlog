import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'

const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 15000
})

service.interceptors.request.use(
  (config: any) => {
    let token = store.state.tokenStorage.token
    if (token) {
      let sp = '?'
      if (config.url.indexOf('?') >= 0) {
        sp = '&'
      }
      config.url = config.url + sp + 'access_token=' + token
    }
    return config
  },
  (error: any) => {

  }
)

service.interceptors.response.use(
  (response: any) => {
    let responseJson = response.data
    return response
  },
  (error: any) => {
    let message
    switch (error.response.status) {
      case 401:
        message = 'Token错误'
        break
      default:
        message = error.response.data.message
        break
    }
    Vue.prototype.$message({
      message: message,
      type: 'error'
    })
    return Promise.reject('error')
  }
)

export default service
