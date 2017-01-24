import React, { Component } from 'react'
import $ from '../../untils'

class Home extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Home`)
  }

  render() {
    return (
      <div id="Home">
        quick start a React Web App project <a href="https://github.com/cattla/quick-react">fork on github</a>
      </div>
    )
  }
}

export default Home
