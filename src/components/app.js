import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
import Header from './header'
// import SceneContainer from './scenes/scene_container'
// import ProjectContainer from './projects/project_container'
// import SignIn from './auth/signin'
// import SignOut from './auth/signout'
// import SignUp from './auth/signup'

export default class App extends Component {

    render() {
      return (
        <div className="App">
          <Header />
          <div className="App header">
            <h1>Story Board</h1>
          </div>

        </div>
      )
    }
}
