import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// import Loader from 'components/Loader'
// import TableHead from './TableHead'
// import TableTransaction from './TableTransaction'

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

  // const renderItems = () => {
  //   if (isLoading) return <Loader className={style.loader} />
  //   if (error) return error
  //   return extensionPhones.results.map((transaction) => (
  //     <TableTransaction
  //       key={transaction.id}
  //       amount={transaction.amount}
  //       enumType={transaction.enum_type}
  //       category={transaction.category}
  //       date={transaction.date}
  //       title={transaction.title}
  //       isCorrection={transaction.is_correction}
  //       isMonthly={transaction.is_monthly}
  //     />
  //   )
  //   )
  // }

  return (
    <div className={style.table}>
      <div className={style.tableContainer} role="table">
        {/* <TableHead /> */}
        {/* {renderItems()} */}
        321
      </div>
    </div>
  )
}

export default Table
