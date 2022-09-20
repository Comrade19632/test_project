import { applyMiddleware, combineReducers, configureStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// eslint-disable-next-line 
import { isEmpty } from 'lodash'
import { login } from './auth/actions'
import authReducer from './auth/reducers'

const reducers = combineReducers({
  auth: authReducer,
})

const store = configureStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))

if (!isEmpty(localStorage.getItem('accessToken')) && !isEmpty(localStorage.getItem('refreshToken'))) {
  store.dispatch(login(localStorage.getItem('accessToken'), localStorage.getItem('refreshToken')))
}

export default store