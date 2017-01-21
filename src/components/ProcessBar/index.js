import React, {Component} from 'react'
import './index.scss'

class ProcessBar extends Component {
  render() {
    return (
      <div id="ProcessBar" style={{width: this.props.width, transition: this.props.transition}}></div>
    )
  }
}

export default ProcessBar
