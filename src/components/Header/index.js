import React, {Component} from 'react'
import {Link} from 'react-router'
import './index.scss'

class App extends Component {
  render() {
    return (
      <div id="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default App
