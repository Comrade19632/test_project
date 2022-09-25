import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'utils/axios'
import { internalApiLoginUrl, setAxiosAuthToken, toastOnError } from 'utils/Utils'

toast.configure()

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const getSelfUser = createAsyncThunk(
  'auth/getSelfUser',
  async () => {
    const response = await axios.get('user/')
    return response.data
  }
)

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = true
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getSelfUser.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload
    })
  }
})

export const { login, logout } = AuthSlice.actions

export const loginThunk = (accessToken, refreshToken) => (dispatch) => {
  setAxiosAuthToken(accessToken)
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
  dispatch(login())
}

export const getTokensAsyncThunk = createAsyncThunk(
  'auth/getTokens',
  (data, thunkAPI) => {
    axios.post(`${internalApiLoginUrl}token/`, data)
      .then((response) => { 
        const { access_token: accessToken, refresh_token: refreshToken } = response.data
        thunkAPI.dispatch(loginThunk(accessToken, refreshToken))
        toast.success('Успешный вход')
      }).catch((error) => {
        toastOnError(error)
      })
  }
)

export const logoutThunk = () => (dispatch) => {
  setAxiosAuthToken('')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  dispatch(logout())
  toast.success('Успешный выход')
}
