import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Modal from './components'
import style from './index.module.sass'

const AddExtensionPhone = ({clientId}) => {

  const [modalIsOpen, toggleModal] = useState(false)

  return (
    <div className={style.addExtensionPhone}>
      <button className={style.button} onClick={() => toggleModal(true)} type='button'>Добавить</button>
      <Modal clientId={clientId} modalIsOpen={modalIsOpen} toggleModal={toggleModal}/>
    </div>
  )
}

AddExtensionPhone.propTypes = {
  clientId: PropTypes.number.isRequired
}

export default AddExtensionPhone
