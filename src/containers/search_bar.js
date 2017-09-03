import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { project: '' }
  }

  onInputChange = (event) => {
    this.setState({ project: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.fetchScenes(this.state.project)
    this.setState({ project: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a project name to get started..."
          className="form-control"
          value={this.state.project}
          onChange={this.onInputChange}
        />
        <span className="form-btn">
          <button type="submit">Submit</button>
        </span>
      </form>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchScenes }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(SearchBar)
