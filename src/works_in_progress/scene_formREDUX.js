import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createScene, updateScene } from '../../actions/scenes'

class SceneForm extends Component {

  renderField(field, type = "text") {

    const { meta: { touched, error } } = field
    const className = `${touched && error ? 'error-text' : ''}`
    return (
      <div>
        <input
          className="tile-input"
          type={type}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className={className}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderTextArea(field) {
    return (
      <div>
        <textarea
          className="tile-input"
          placeholder={field.placeholder}
          {...field.input}
        >
        </textarea>
      </div>
    )
  }

  onSubmit(values) {
    let { scene } = this.props
    const { scene: { title, notes } } = this.props
    scene = { ...scene, title, notes }
    this.props.updateScene(scene)
  }

  render() {
    console.log(this.props)
    const { handleSubmit } = this.props
    const { scene: { title, notes } } = this.props

    return (
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name='title'
              component={this.renderField}
              placeholder="Add your scene's title "
              />
            <Field
              name='notes'
              component={this.renderTextArea}
              placeholder="Write a synopsis of this scene, or any relevant notes you want to add..."
              />
            <button type="submit" className="tile-btn">SAVE</button>
          </form>
        </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Please enter a scene title."
  }

  return errors
}

// function mapStateToProps(state, ownProps) {
//   return {
//     initialValues: {
//       title: ownProps.scene.title,
//       notes: ownProps.scene.notes
//     }
//   }
// }

export default reduxForm({
    validate,
    form: 'UpdateSceneForm'
  // })(connect(mapStateToProps, { updateScene })(SceneForm))
})(connect(null, { updateScene })(SceneForm))
