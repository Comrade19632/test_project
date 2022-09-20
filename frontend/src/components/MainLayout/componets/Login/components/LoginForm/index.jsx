import React from 'react'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'

const LoginForm = ({handleLogin}) => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({username, password}, { setSubmitting }) => {
        handleLogin(username, password)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="username" name="username" />
          <Field type="password" name="password" />
          <button type="submit" disabled={isSubmitting}>
            Submit
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