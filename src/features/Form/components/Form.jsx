import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap'
import styles from '../styles.scss'

const formElement = (render) => ({ input, meta, label, type, ...rest }) => (
  <div
    className={
      [
        meta.error && meta.touched ? 'error' : '',
        meta.active ? 'actived' : '',
      ].join(' ') + ' element-row'
    }
  >
    {/*<pre>{JSON.stringify(meta, null, 2)}</pre>*/}
    <label>{label}</label>
    {render(input, label, rest)}
    {meta.error && meta.touched && (
      <span className="error-quote">{meta.error}</span>
    )}
  </div>
)

const validate = (values) => {
  const errors = {}

  if (!values.FirstName) errors.FirstName = 'Povinne pole'
  if (!values.Email) errors.Email = 'Povinne pole'

  return errors
}

const renderInput = formElement((input, label) => (
  <input {...input} placeholder={label} />
))

const renderCheckbox = formElement((input, label) => (
  <input {...input} placeholder={label} type="checkbox" />
))

const renderSelect = formElement((input, label, { children }) => (
  <select {...input}>{children}</select>
))

const sex = ['zena', 'muz', 'neco mezi']

const Form = ({ handleSubmit, showData, submitting }) => {
  return (
    <form onSubmit={handleSubmit(showData)} className="contact-form">
      <Field
        type="text"
        component={renderInput}
        label="Krestni jmeno"
        name="FirstName"
      />
      <Field type="text" component={renderInput} label="Email" name="Email" />
      <Field
        type="select"
        component={renderSelect}
        label="Pohlavi"
        name="Gender"
      >
        {sex.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Field>
      <Field
        type="checkbox"
        component={renderCheckbox}
        label="GDPR"
        name="GDPR"
      />
      <br />
      <Button disabled={submitting} color="danger" className="btn">
        Odeslat
      </Button>
    </form>
  )
}

export default reduxForm({
  form: 'testForm',
  validate: validate,
})(Form)
