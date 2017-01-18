import React, {Component} from 'react'
import './index.scss'

class ProcessBar extends Component {
  start(){
    console.log('start')
  }
  render() {
    return (
      <div id="ProcessBar" style={{width: this.props.width}}></div>
    )
  }
}

export default ProcessBar
