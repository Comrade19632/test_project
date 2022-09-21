import React from 'react'
import classNames from 'classnames'
import style from './index.module.sass'

const TableHead = () => (
  <div className={classNames(style.flexTable, style.header)} role="rowgroup">
    <div className={classNames(style.flexRow, style.typeCol)} role="columnheader">Тип</div>
    <div className={classNames(style.flexRow, style.statusCol)} role="columnheader">Статус</div>
    <div className={classNames(style.flexRow, style.nameCol)} role="columnheader">Имя</div>
    <div className={classNames(style.flexRow, style.labelCol)} role="columnheader">Название</div>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <div className={classNames(style.flexRow, style.buttonsCol)} role="columnheader"/>
  </div>
)

export default TableHead
