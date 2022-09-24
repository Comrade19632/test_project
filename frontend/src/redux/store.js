import { configureStore } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'

import { extensionPhonesSlice } from './extensionPhonesSlice'
import {AuthSlice, loginThunk} from './authSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    [extensionPhonesSlice.reducerPath]: extensionPhonesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(extensionPhonesSlice.middleware),
})

if (!isEmpty(localStorage.getItem('accessToken')) && !isEmpty(localStorage.getItem('refreshToken'))) {
  store.dispatch(loginThunk(localStorage.getItem('accessToken'), localStorage.getItem('refreshToken')))
}

export default store