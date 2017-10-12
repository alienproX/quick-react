import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from '../../untils'
import styles from './index.scss'

class Todo extends Component {
  componentDidMount = () => {
    $.setDocTitle(`UIkit`)
  }

  render() {
    return (
      <div className={styles.Todo}>
        xxx
      </div>
    )
  }
}

export default connect(state => ({state: state.Todo}))(Todo)
