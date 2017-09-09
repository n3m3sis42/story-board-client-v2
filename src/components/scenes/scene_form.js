import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateScene } from '../../actions/scenes'

class SceneForm extends Component {

  state = {
    id: null,
    title: '',
    notes: '',
  }

  componentDidMount() {
    this.textInput.focus()
    const { id, title, notes } = this.props.children
    this.setState({ id, title, notes })
  }

  handleBlur = (event) => {
    this.props.updateScene(this.state)
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onKeyPress = (event) => {
    if (event.which === 13) {
      event.preventDefault();
    }
  }

  render() {

    const { title, notes } = this.state

    return (
        <div>
          <form onBlur={this.handleBlur} onKeyPress={this.onKeyPress}>
            <input
              className='tile-input'
              type='text'
              name='title'
              ref = {(input) => {this.textInput = input}}
              value={title}
              onChange={this.handleInput}/>
            <br />
            <br />
            <textarea
              className='tile-input'
              type='text'
              name='notes'
              value={notes}
              onChange={this.handleInput}>
            </textarea>
            <span className="tile-btn" onClick={this.props.display}>DONE</span>
          </form>
        </div>
    )
  }
}

export default connect(null, { updateScene })(SceneForm)
