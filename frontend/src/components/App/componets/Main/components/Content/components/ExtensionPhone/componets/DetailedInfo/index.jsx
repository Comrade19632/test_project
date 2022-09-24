import React from 'react'
import PropTypes from 'prop-types'
import { useGetExtensionPhoneQuery } from 'redux/extensionPhonesSlice'
import Loader from 'components/Loader'
import style from './index.module.sass'
import EditingForm from './components/EditingForm'

const DetailedInfo = ({clientId, extensionPhoneId}) => {

  const { data: extensionPhone, isFetching } = useGetExtensionPhoneQuery({clientId, extensionPhoneId})

  return(
    (isFetching) ? <Loader className={style.loader}/> : <EditingForm extensionPhoneId={extensionPhoneId} extensionPhone={extensionPhone} clientId={clientId}/>
  )}

DetailedInfo.propTypes = {
  clientId: PropTypes.number.isRequired,
  extensionPhoneId: PropTypes.string.isRequired
}

export default DetailedInfo