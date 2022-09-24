import axios from 'axios'
import { setAxiosAuthToken, internalApiLoginUrl } from 'utils/Utils'

const baseURL = 'https://apiproxy.telphin.ru/api/ver1.0/'

const instance = axios.create({
  baseURL,
})

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

instance.interceptors.response.use((response) => response, (error) => {

  const originalRequest = error.config

  if (
    error.response.status === 401 &&
    originalRequest.url === `${internalApiLoginUrl}token/refresh/`
  ) {
    setAxiosAuthToken('')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    window.location.href = '/login'
    return Promise.reject(error)
  }

  // eslint-disable-next-line no-underscore-dangle
  if (error.response.status === 401 && !originalRequest._retry) {

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then((access) => {
        originalRequest.headers.Authorization = `Bearer ${access}`
        return instance(originalRequest)
      }).catch(err => Promise.reject(err))
    }

    // eslint-disable-next-line no-underscore-dangle
    originalRequest._retry = true
    isRefreshing = true

    const refreshToken = window.localStorage.getItem('refreshToken')
    return new Promise((resolve, reject) => {
      instance.post(`${internalApiLoginUrl}token/refresh/`, { refresh: refreshToken })
        .then(({ data }) => {
          const { access_token: access, refresh_token: refresh } = data
          setAxiosAuthToken(access)
          localStorage.setItem('accessToken', access)
          localStorage.setItem('refreshToken', refresh)
          originalRequest.headers.Authorization = `Bearer ${access}`
          processQueue(null, access)
          resolve(instance(originalRequest))
        })
        .catch((err) => {
          processQueue(err, null)
          reject(err)
        })
        .finally(() => { isRefreshing = false })
    })
  }

  return Promise.reject(error)
})

export default instance