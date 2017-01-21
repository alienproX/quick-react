import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux'
import ProcessBar from '../ProcessBar'
import './index.scss'

class Header extends Component {
  render() {
    const {state} = this.props
    return (
      <div id="header">
        <ProcessBar width={state.processBarWidth} transition={state.processTransition} />
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

export default connect(state => ({state: state.Header}))(Header)
