import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { loginViaFrom } from 'redux/auth/actions'

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

  const handleLogin = (username, password) => dispatch(loginViaFrom(username, password))

  return (
    <div>login</div>
  )
}

export default Login
