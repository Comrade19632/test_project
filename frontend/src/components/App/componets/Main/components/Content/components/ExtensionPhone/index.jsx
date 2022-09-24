import Block from 'components/Block'
import Loader from 'components/Loader'
import { useSelector } from 'react-redux'
import React from 'react'
import { Link,useParams  } from 'react-router-dom'
import DetailedInfo from './componets/DetailedInfo'
import style from './index.module.sass'

const ExtensionPhone = () => {

  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const { extensionPhoneId } = useParams()

  return (
    <Block className={style.extensionPhone}>
      <Link to="/"><button type='button' className={style.homeButton}>На главную</button></Link>
      {(user) ? <DetailedInfo clientId={user.client_id} extensionPhoneId={extensionPhoneId}/> : <Loader className={style.loader}/>}
    </Block>
  )
}

export default ExtensionPhone