import React, {Component} from 'react'
import Header from './components/Header'
import './assets/app.scss'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header/>
        <div id="Main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
