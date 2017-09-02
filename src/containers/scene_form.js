import React, { Component } from 'react';

const data = {
  scene: {
    title: '',
    notes: ''
  }
}

export default class SceneForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: this.props.scene.title,
      notes: this.props.scene.notes
    }
  }

  handleInput = (event) => {
    this.props.resetNotification()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleBlur = () => {
    data.scene = {
      title: this.state.title,
      notes: this.state.notes
    }
    this.props.updateScene(data)
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input className='input' type='text' name='title' placeholder='Enter title for scene...' value={this.state.title} onChange={this.handleInput} ref={this.props.titleRef} />
          <br />
          <br />
          <textarea className='input' type='text' name='notes' placeholder='Describe the scene...' value={this.state.notes} onChange={this.handleInput} ></textarea>
        </form>
      </div>
    )
  }
}
