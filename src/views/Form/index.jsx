import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateData} from '../../actions/Form'
import $ from '../../untils'
import styles from './index.scss'

class Form extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Form`)
  }
  updateData = updateData(this.props, this.props.state)

  updateForm = this.updateData.updateForm

  updateSelect = this.updateData.updateSelect

  submit = this.updateData.submit

  render() {
    const {state} = this.props
    return (
      <div className={styles.Form}>
        <h2>Form Solution</h2>
        <ul>
          <li>
            <span>string</span>
            <input type="text" value={state.text} onChange={() => this.updateForm('text', this.text.value)} ref={(text) => this.text = text}/>
            <p>{state.text}</p>
          </li>
          <li>
            <span>number only</span>
            <input type="text" value={state.number} onChange={() => this.updateForm('number', this.number.value, '[^0-9]')} ref={(number) => this.number = number}/>
            <p>{state.number}</p>
          </li>
          <li>
            <span>radio</span>
            <label><input type="radio" value="A" onChange={() => this.updateForm('radio', 'A')} checked={state.radio === 'A'}/>A</label>
            <label><input type="radio" value="B" onChange={() => this.updateForm('radio', 'B')} checked={state.radio === 'B'}/>B</label>
            <p>{state.radio}</p>
          </li>
          <li>
            <span>checkbox</span>
            <label><input type="checkbox" value="A" onChange={(e) => this.updateSelect(e, 'checkbox')}/>A</label>
            <label><input type="checkbox" value="B" onChange={(e) => this.updateSelect(e, 'checkbox')}/>B</label>
            <label><input type="checkbox" value="C" onChange={(e) => this.updateSelect(e, 'checkbox')}/>C</label>
            <p>{state.checkbox.join('-')}</p>
          </li>

          <li>
            <span>select</span>
            <select defaultValue={state.select} onChange={() => this.updateForm('select', this.select.value)} ref={(select) => this.select = select}>
              <option value=""></option>
              <option value="option A">option A</option>
              <option value="option B">option B</option>
              <option value="option C">option C</option>
            </select>
            <p>{state.select}</p>
          </li>
          <li>
            <button onClick={this.submit}>SUBMIT</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({state: state.Form}))(Form)
