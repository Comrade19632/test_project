import React from 'react'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'
import style from './index.module.sass'

const LoginForm = ({handleLogin}) => (
  <div className={style.form}>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({username, password}, { setSubmitting }) => {
        handleLogin(username, password)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="username" name="username" placeholder="Логин"/>
          <Field type="password" name="password" placeholder="Пароль"/>
          <button type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginForm