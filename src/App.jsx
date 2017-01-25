import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './components/Header'
import Notify from './components/Notify'
import './assets/app.scss'

class App extends Component {
  render() {
    const {state} = this.props
    return (
      <div id="App">
        <Notify data={state} />
        <Header/>
        <div id="Main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(state => ({state: state.Header}))(App)
