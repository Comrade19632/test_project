import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const TableExtensionPhone = ({
  status,
  type,
  name,
  label,
}) => (
  <div className={style.flexTable} role="rowgroup">
    <div className={`${style.flexRow} ${style.typeCol}`} role="cell">
      <span>Тип: </span>
      {type}
    </div>
    <div className={`${style.flexRow} ${style.statusCol}`} role="cell">
      <span>Статус: </span>
      {status}
    </div>
    <div className={`${style.flexRow} ${style.nameCol}`} role="cell">
      <span>Имя: </span>
      {name}
    </div>
    <div className={`${style.flexRow} ${style.labelCol}`} role="cell">
      <span>Название: </span>
      {label}
    </div>
    <div className={`${style.flexRow} ${style.buttonsCol}`} role="cell">
      кнопки
    </div>
  </div>
)

TableExtensionPhone.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}

TableExtensionPhone.defaultProps = {
  label: '',
}

export default TableExtensionPhone
