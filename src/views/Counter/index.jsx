import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateData} from '../../store/actions/Counter'
import $ from '../../untils'
import styles from './index.scss'

class Counter extends Component {
  componentDidMount = () => {
    $.setDocTitle(`Counter`)
  }
  updateData = updateData(this.props, this.props.state)

  numChange = this.updateData.numChange

  compute = this.updateData.compute

  render() {
    const {state} = this.props
    return (
      <div className={styles.Counter}>
        Result:
        <span>
          {state.value}
        </span>
        <p>
          <button onClick={() => this.compute('+', this.additionInput.value)}>
            +{state.addition}
          </button>
          <input type="range" min="1" max="10" value={state.addition} onChange={() => this.numChange('+', this.additionInput.value)}  ref={(input) => this.additionInput = input} />
        </p>
        <p>
          <button onClick={() => this.compute('-', this.substructionInput.value)} className="substruction">
            -{state.substruction}
          </button>
          <input type="range" min="1" max="10" value={state.substruction} onChange={() => this.numChange('-', this.substructionInput.value)} ref={(input) => this.substructionInput = input}/>
        </p>
      </div>
    )
  }
}

export default connect(state => ({state: state.Counter}))(Counter)
