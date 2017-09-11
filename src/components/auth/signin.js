import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authActions from '../../actions/auth'

class SignIn extends Component {

  // componentWillMount () {
  //   console.log('Mounting')
  //   if (localStorage.getItem('token')) this.props.history.push('/projects')
  // }
  // componentWillUpdate () {
  //   console.log('Updating')
  //   if (localStorage.getItem('token')) this.props.history.push('/projects')
  // }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='error-text'>
          <strong>Oops! {this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          className="form-input"
          type={field.type ? field.type : "text"}
          placeholder={field.placeholder}
          {...field.input}
        />
      </div>
    )
  }

  onSubmit({ email, password }) {
    console.log(this.props)
    this.props.signUserIn({ email, password })
    console.log(this.props)
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
        {this.renderAlert()}
        <button type="submit" className="btn form-btn">Sign In</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'SignInForm'
})
(connect(mapStateToProps, authActions)(SignIn)
)
