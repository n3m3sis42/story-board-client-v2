import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import App from './app'
import SignIn from './auth/signin'
import SignUp from './auth/signup'
import SignOut from './auth/signout'
import SceneContainer from './scenes/scene_container'
import ProjectContainer from './projects/project_container'
import SceneList from './scenes/SceneList'
import PrivateRoute from './PrivateRoute'

export default class Routes extends React.Component{
  render(){
    return(
        <div>
        <Switch>
          <Route exact path={'/signup'} component={SignUp} />
          <Route exact path={'/signin'} component={SignIn} />
          <PrivateRoute exact path={'/signout'} component={SignOut} />
          <PrivateRoute path={'/scenes'} component={SceneContainer} />
          <PrivateRoute path={'/projects/:id/scenes'} component={SceneContainer} />
          <PrivateRoute path={'/projects'} component={ProjectContainer} />
        </Switch>

        </div>
    )
  }
}
