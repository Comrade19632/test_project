import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from 'components/Loader'

import TableHead from './TableHead'
import TableExtensionPhone from './TableExtensionPhone'

import style from './index.module.sass'
import useExtensionPhones from '../../hooks/useExtensionPhones'

const Table = () => {

  const {
    user,
  } = useSelector(state => ({
    user: state.auth.user,
  }))

  const {
    getExtensionPhonesData,
    extensionPhones,
    isLoading,
  } = useExtensionPhones()

  useEffect(() => {
    getExtensionPhonesData(user.client_id)
  }, [getExtensionPhonesData, user.client_id])

  return (
    <div className={style.table}>
      <div className={style.tableContainer} role="table">
        <TableHead />
        {(isLoading) ? (<Loader className={style.loader} />) :
          extensionPhones.map((extensionPhone) => (
            <TableExtensionPhone
              key={extensionPhone.id}
              status={extensionPhone.status}
              type={extensionPhone.type}
              name={extensionPhone.name}
              label={extensionPhone.label}
            />
          ))}
      </div>
    </div>
  )
}

export default Table