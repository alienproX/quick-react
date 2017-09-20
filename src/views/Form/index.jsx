import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateData} from '../../store/actions/Form'
import $ from '../../untils'
import styles from './index.scss'

class Form extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Form`)
  }
  updateForm = (key, val, reg) => updateData.updateForm(this.props, key, val, reg)

  updateSelect = (e, key) => updateData.updateSelect(this.props, e, key)

  submit = () => alert(JSON.stringify(this.props.state))

  reset = () => updateData.reset(this.props)

  notify = (type) => {
    updateData.notify(this.props, {text: 'For quick start a React Web App project. The project based on React, React Router, Redux, SASS and webpack.', type: type})
  }

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
            <label><input type="checkbox" value="A" checked={state.checkbox.indexOf('A') > -1} onChange={(e) => this.updateSelect(e, 'checkbox')}/>A</label>
            <label><input type="checkbox" value="B" checked={state.checkbox.indexOf('B') > -1} onChange={(e) => this.updateSelect(e, 'checkbox')}/>B</label>
            <label><input type="checkbox" value="C" checked={state.checkbox.indexOf('C') > -1} onChange={(e) => this.updateSelect(e, 'checkbox')}/>C</label>
            <p>{state.checkbox.join('-')}</p>
          </li>

          <li>
            <span>select</span>
            <select value={state.select } onChange={() => this.updateForm('select', this.select.value)} ref={(select) => this.select = select}>
              <option value=""></option>
              <option value="option A">option A</option>
              <option value="option B">option B</option>
              <option value="option C">option C</option>
            </select>
            <p>{state.select}</p>
          </li>
          <li>
            <button onClick={this.submit}>SUBMIT</button>
            <button onClick={this.reset}>RESET</button>
            <button onClick={() => this.notify()}>NOTIFY</button>
            <button onClick={() => this.notify('success')}>NOTIFY success</button>
            <button onClick={() => this.notify('info')}>NOTIFY info</button>
            <button onClick={() => this.notify('warning')}>NOTIFY warning</button>
            <button onClick={() => this.notify('danger')}>NOTIFY danger</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(state => ({state: state.Form}))(Form)
