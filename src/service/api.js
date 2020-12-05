//axios数据服务统一配置文件
import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 15000
})

service.interceptors.request.use(
  config => {
    let token = ''
    config.headers['Content-Type'] = 'application/json'
    config.headers.Authorization = token

    return config
  }
)

// 统一配置接口
service.interceptors.response.use(
  response => {
    if(response.status) {
      let resCode = response.status
      switch(resCode) {
        case 200:
          return Promise.resolve(response.data)
        default:
          console.log('success: 未约定的状态码')
          console.log(resCode)
      }
    }
  },
  error => {
    if(error.response && error.response.status) {
      let errorCode = error.response.status
      switch(errorCode) {
        case 400:
          break
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        default:
          console.log('error: 未约定的状态码')
          console.log(errorCode)
      }
      return Promise.reject(error.response)
    } else {
      store.commit('globalHint', {
        shown: true,
        text: '网络错误，请稍后再试！'
      })
    }
  }
)

export default service