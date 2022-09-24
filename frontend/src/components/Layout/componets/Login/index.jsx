import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { getTokensAsyncThunk } from 'redux/authSlice'
import LoginForm from './components/LoginForm'
import style from './index.module.sass'

const Login = () => {
  const dispatch = useDispatch()

  const {
    isAuthenticated,
  } = useSelector(state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }))

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const handleLogin = (username, password) => {
    dispatch(getTokensAsyncThunk({username, password}))}

  return (
    <div className={style.container}>
      <LoginForm handleLogin={handleLogin}/>
    </div>
  )
}

export default Login
