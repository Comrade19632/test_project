import axios from 'utils/axios'
import { toast } from 'react-toastify'

export const setAxiosAuthToken = (token) => {
  if (typeof token !== 'undefined' && token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export const toastOnError = (error) => {
  if (error.response) {
    if (error.response.data?.error_description) {
      toast.error(JSON.stringify(error.response.data.error_description))
    }
    else if (error.response.data?.message) {
      toast.error(JSON.stringify(error.response.data.message))
    }
    else {
      toast.error(JSON.stringify(error.response.data))
    }
  } else if (error.message) {
    toast.error(JSON.stringify(error.message))
  } else {
    toast.error(JSON.stringify(error))
  }
}

export const internalApiLoginUrl = (process.env.NODE_ENV === 'production') ? `${window.location.origin}/api/` : 'http://localhost/api/'
export const loginPageUrl = (process.env.NODE_ENV === 'production') ? `${window.location.origin}/login` : 'http://localhost:3000/login'
