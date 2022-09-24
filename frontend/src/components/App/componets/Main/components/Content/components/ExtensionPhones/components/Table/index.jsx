import React from 'react'
import Loader from 'components/Loader'

import { useGetExtensionPhonesQuery } from 'redux/extensionPhonesSlice'
import PropTypes from 'prop-types'
import TableHead from './TableHead'
import TableExtensionPhone from './TableExtensionPhone'

import style from './index.module.sass'

const Table = ({clientId}) => {
  const {
    data: extensionPhones,
    isLoading,
  } = useGetExtensionPhonesQuery(clientId)

  return (
    <div className={style.table}>
      <div className={style.tableContainer} role="table">
        <TableHead />
        {(isLoading) ? (<Loader className={style.loader} />) :
          extensionPhones.map((extensionPhone) => (
            <TableExtensionPhone
              key={extensionPhone.id}
              extesionPhoneId={extensionPhone.id}
              status={extensionPhone.status}
              type={extensionPhone.type}
              name={extensionPhone.name}
              label={extensionPhone.label}
              clientId={clientId}
            />
          ))}
      </div>
    </div>
  )
}

Table.propTypes = {
  clientId: PropTypes.number.isRequired
}

export default Table