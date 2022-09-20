import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from 'redux/auth/actions'
import style from './index.module.sass'

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentUser())
  }, [dispatch])

  return (
    <div className={style.main}>
      тест
    </div>
  )
}
export default Main
