import React, {Component} from 'react'
import {connect} from 'react-redux'
import configStore from './store'
import Header from './components/Header'
import Notify from './components/Notify'
import Process from './components/ProcessBar/action'
import './assets/app.scss'

const setProcess = Process(configStore())

class App extends Component {
  render() {
    const {state} = this.props

    return (
      <div id="App">
        <Notify data={state.notify} ref={(notify) => this.notify = notify} />
        <Header/>
        <div id="Main">
          {this.props.children}
        </div>
      </div>
    )
  }
  componentWillMount() {
    setProcess.start()
  }
  componentWillUpdate() {
    setProcess.start()
  }
  componentDidMount() {
    setProcess.end()
  }
  componentDidUpdate() {
    setProcess.end()
  }
}

export default connect(state => ({state: state.Header}))(App)
