import Block from 'components/Block'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/auth/actions'
import style from './index.module.sass'

const Profile = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const dispatch = useDispatch()

  const logoutOnClick = () => dispatch(logout())

  return (
    <Block className={style.profile}>
        Привет, {user.login}
      <button className={style.button} onClick={logoutOnClick} type='button'>Выйти</button>
    </Block>
  )
}

export default Profile
