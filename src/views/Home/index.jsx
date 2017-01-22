import React, { Component } from 'react'
import $ from '../../untils'

class Home extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Home`)
  }

  render() {
    return (
      <div id="Home">
        this is home
      </div>
    )
  }
}

export default Home
