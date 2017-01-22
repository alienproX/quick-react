import React, {Component} from 'react'
import $ from '../../untils'
import styles from './index.scss'

class Form extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Form`)
  }
  render() {
    return (
      <div className={styles.Form}>
        about
      </div>
    )
  }
}

export default Form
