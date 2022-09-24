import React from 'react'
import ReactModal from 'react-modal'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'
import { useAddNewExtensionPhoneMutation } from 'redux/extensionPhonesSlice'
import style from './index.module.sass'

const Modal = ({modalIsOpen, toggleModal, clientId}) => {
  const [addNewExtensionPhone] = useAddNewExtensionPhoneMutation()
  return (
    <ReactModal ariaHideApp={false} className={style.modal} onRequestClose={() => toggleModal(false)} isOpen={modalIsOpen} closeTimeoutMS={200}>
      <div className={style.form}>
        <Formik
          initialValues={{ status: 'active', type: 'phone', name: '', label: '' }}
          onSubmit={(formData, { setSubmitting }) => {
            setSubmitting(false)
            addNewExtensionPhone({clientId, formData})
            toggleModal(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field as="select" name="status">
                <option value="active">Активен</option>
                <option value="blocked">Заблокирован</option>
              </Field>
              <Field as="select" name="type">
                <option value="phone">Телефонный терминал</option>
                <option value="queue">Очередь</option>
                <option value="ivr">Голосовое меню</option>
                <option value="fax">Факс</option>
                <option value="conference">Конференция</option>
              </Field>
              <Field type="digits" name="name" placeholder="Имя" />
              <Field type="text" name="label" placeholder="Название"/>
              <button type="submit" disabled={isSubmitting}>
                Добавить
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
  clientId: PropTypes.number.isRequired
}

export default Modal