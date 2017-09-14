import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as authActions from '../../actions/auth'

class SignUp extends Component {

  renderAlert() {
    console.log(this.props)
    if (this.props.errorMessage) {
      return (
        <div className='error-text'>
          <strong>Oops! {this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `${touched && error ? 'error-text' : ''}`
    return (
      <div>
        <label>{field.label}</label>
        <input
          className="form-input"
          type={field.type ? field.type : "text"}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className={className}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.signUserUp(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Email: "
          name="email"
          component={this.renderField}
        />
        <Field
          label="Password: "
          name="password"
          type="password"
          component={this.renderField}
        />
        <Field
          label="Confirm Password: "
          name="passwordConfirm"
          type="password"
          component={this.renderField}
        />
        {this.renderAlert()}
        <button type="submit" className="btn form-btn">Sign Up!</button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  if (!values.email) {
    errors.email = 'Please enter an email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please re-enter your password'
  }

  return errors
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'SignUpForm'
})(connect(mapStateToProps, authActions)(SignUp))
