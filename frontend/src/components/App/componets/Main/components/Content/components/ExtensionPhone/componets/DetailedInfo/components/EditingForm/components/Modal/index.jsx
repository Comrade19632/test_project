import React from 'react'
import ReactModal from 'react-modal'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'
import { useEditExtensionPhoneMutation } from 'redux/extensionPhonesSlice'
import style from './index.module.sass'

const Modal = ({label, status, extensionPhoneId, modalIsOpen, toggleModal, clientId}) => {
  const [editExtensionPhone] = useEditExtensionPhoneMutation()
  return (
    <ReactModal ariaHideApp={false} className={style.modal} onRequestClose={() => toggleModal(false)} isOpen={modalIsOpen} closeTimeoutMS={200}>
      <div className={style.form}>
        <Formik
          initialValues={{ status, label }}
          onSubmit={(formData, { setSubmitting }) => {
            setSubmitting(false)
            editExtensionPhone({clientId, formData, extensionPhoneId})
            toggleModal(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field as="select" name="status">
                <option value="active">Активен</option>
                <option value="blocked">Заблокирован</option>
              </Field>
              <Field type="text" name="label" placeholder="Название"/>
              <button type="submit" disabled={isSubmitting}>
                Обновить
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ReactModal >
  )}

Modal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  clientId: PropTypes.number.isRequired,
  extensionPhoneId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default Modal