import Block from 'components/Block'
import Loader from 'components/Loader'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutThunk } from 'redux/authSlice'
import style from './index.module.sass'

const Profile = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()

  const logoutOnClick = () => dispatch(logoutThunk())

  return (
    <Block className={style.profile}>
      {(user) ? (<>
        Привет, {user.login}
        <button className={style.button} onClick={logoutOnClick} type='button'>Выйти</button>
      </>) : <Loader className={style.loader}/>}
    </Block>
  )
}

export default Profile
