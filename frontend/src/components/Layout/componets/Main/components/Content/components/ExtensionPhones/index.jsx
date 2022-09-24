import React from 'react'
import { useSelector } from 'react-redux'
import Block from 'components/Block'
import Loader from 'components/Loader'
import Table from './components/Table'
import style from './index.module.sass'

const ExtensionPhones = () => {
  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  return (
    <div className={style.extensionPhones}>
      <Block>
        {(user) ? <Table clientId={user.client_id}/> : <Loader className={style.loader}/>}
      </Block>
    </div>
  )}

export default ExtensionPhones