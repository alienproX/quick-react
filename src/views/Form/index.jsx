import React, {Component} from 'react'
import $ from '../../untils'
import './index.scss'

class Form extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Form`)
  }
  render() {
    return (
      <div className='Form'>
        about
      </div>
    )
  }
}

export default Form
