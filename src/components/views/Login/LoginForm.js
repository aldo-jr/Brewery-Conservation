import React from 'react'
import {Field, reduxForm} from 'redux-form'

const validate = values => {
  const requiredMsg = "This field is required";
  const errors = {}

  if (!values.user) {
    errors.user = requiredMsg
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user)) {
    errors.user = 'Please, type a valid e-mail'
  }

  if (!values.password) {
    errors.password = requiredMsg
  }

  return errors
}

const renderField = ({
                       input,
                       label,
                       type,
                       meta: {touched, error, warning}
                     }) => (
  <div className="form-group">
    <label className='mt-3' htmlFor={input.name}>{label}</label>
    <input {...input} id={input.name} placeholder={label} type={type}
           className={`form-control ${touched && ((error && 'is-invalid'))}`}/>
    {touched && (error && <span className='text-danger'>{error}</span>)}
  </div>

)

const LoginForm = props => {
  const {handleSubmit, submitting} = props
  return (

    <form onSubmit={handleSubmit}>
      <Field name="user" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>

      <button type="submit" disabled={submitting} className="btn btn-primary btn-block mt-3">
        {submitting ? 'Signing in' : 'Sign in'}
      </button>

    </form>
  )
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm)