import React, { Component } from 'react'
import Navbar from './navbar'
import Routes from './routes'

export default class App extends Component {

    render() {
      return (
        <div className='app'>
          <Navbar />
          <div className="header">
            <h1>Story Board</h1>
          </div>
            <Routes />
        </div>
      )
    }
}
