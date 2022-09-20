import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'utils/axios'

import { setAxiosAuthToken, toastOnError } from 'utils/Utils'
import { ACTION_TYPES } from './constants'

toast.configure()

export const login = (accessToken, refreshToken) => {
  setAxiosAuthToken(accessToken)
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
  return {
    type: ACTION_TYPES.LOGIN,
  }
}

export const unsetCurrentUser = () => (dispatch) => {
  setAxiosAuthToken('')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  dispatch({
    type: ACTION_TYPES.UNSET_CURRENT_USER,
  })
}

export const setCurrentUser = () => (dispatch) => {
  axios
    .get('user/')
    .then((response) => {
      const user = response.data
      dispatch({
        type: ACTION_TYPES.SET_CURRENT_USER,
        payload: user,
      })
    })
}

export const logout = () => (dispatch) => {
  dispatch(unsetCurrentUser())
  toast.success('Logout successful.')
}

export const loginViaFrom = (username, password) => (dispatch) => {
  axios
    .post((process.env.NODE_ENV === 'production') ? `${window.location.origin}/api/login` : 'http://localhost/api/login',
      { username, password })
    .then((response) => {
      const { access_token: access, refresh_token: refresh } = response.data
      dispatch(login(access, refresh))
      toast.success('Login successful.')
    })
    .catch((error) => {
      toastOnError(error)
    })
}

