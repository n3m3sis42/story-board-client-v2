import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateScene } from '../actions/scenes'

class SceneForm extends Component {

  state = {
    id: null,
    title: '',
    notes: ''
  }

  componentDidMount() {
    this.textInput.focus()
    const { id, title, notes } = this.props.activeScene
    this.setState({ id, title, notes })
  }

  focus() {
    this.textInput.focus()
  }

  handleBlur = () => {
    this.props.updateScene(this.state)
  }

  handleInput = (event) => {
    // this.props.resetNotification()
    this.setState({[event.target.name]: event.target.value})
  }

  onKeyPress = (event) => {
    if (event.which === 13) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur} onKeyPress={this.onKeyPress}>
          <input
            className='input'
            type='text'
            name='title'
            ref = {(input) => {this.textInput = input}}
            placeholder='Enter title for scene...'
            value={this.state.title}
            onChange={this.handleInput}
          />
          <br />
          <br />
          <textarea className='input' type='text' name='notes' placeholder='Describe the scene...' value={this.state.notes} onChange={this.handleInput} ></textarea>
        </form>
      </div>
    )
  }
}

export default connect(null, { updateScene })(SceneForm)
