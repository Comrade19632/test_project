import React, {useState} from 'react'
import PropTypes from 'prop-types'
import style from './index.module.sass'
import Modal from './components/Modal'

const EditingForm = ({extensionPhoneId, extensionPhone, clientId}) => {
  const [modalIsOpen, toggleModal] = useState(false)

  return (
    <div className={style.editingForm}>
      {Object.entries(extensionPhone).map(([key, value]) => 
        (<div key={key} className={style.item}>
          <span>{key}:</span>
          {value}
        </div>)
      )}
      <button className={style.button} onClick={() => toggleModal(true)} type='button'>Обновить</button>
      <Modal label={extensionPhone.label} status={extensionPhone.status} extensionPhoneId={extensionPhoneId} clientId={clientId} modalIsOpen={modalIsOpen} toggleModal={toggleModal}/>
    </div>
  )}

EditingForm.propTypes = {
  clientId: PropTypes.number.isRequired,
  extensionPhoneId: PropTypes.string.isRequired,
  /* eslint-disable-next-line react/forbid-prop-types */
  extensionPhone: PropTypes.object.isRequired
}

export default EditingForm