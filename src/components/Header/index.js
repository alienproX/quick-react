import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import './index.scss'

class App extends Component {
  render() {
    return (
      <div id="header">
        <ul>
          <li>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li>
            <Link to="/counter" activeClassName="active">Counter</Link>
          </li>
          <li>
            <Link to="/todo" activeClassName="active">Todo</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default App
