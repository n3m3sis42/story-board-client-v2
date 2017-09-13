import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({component: Component, ...data}) => (
  <Route {...data} render={props => (
      !!localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to={'/signin'} />
      )
  )} />
)


export default PrivateRoute
