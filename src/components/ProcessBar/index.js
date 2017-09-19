import React, {Component} from 'react'
import styles from './index.scss'

class ProcessBar extends Component {
  render() {
    return (
      <div id="_ProcessBar" className={styles.ProcessBar} style={{width: this.props.width, transition: this.props.transition}}></div>
    )
  }
}

export default ProcessBar
