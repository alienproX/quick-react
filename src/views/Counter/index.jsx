import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compute, numChange} from '../../actions/Counter'
import './index.scss'

class Counter extends Component {
  substructionChange = () => {
    this.props.dispatch(numChange('-', this.substructionInput.value))
  }

  additionChange = (val) => {
    this.props.dispatch(numChange('+', this.additionInput.value))
  }

  render() {
    const {state, dispatch} = this.props
    const onIncrement = () => dispatch(compute('+', this.additionInput.value))
    const onDecrement = () => dispatch(compute('-', this.substructionInput.value))

    return (
      <div id="Counter">
        Result:
        <span>
          {state.value}
        </span>
        <p>
          <button onClick={onIncrement}>
            +{state.addition}
          </button>
          <input type="range" min="1" max="10" value={state.addition} onChange={this.additionChange}  ref={(input) => this.additionInput = input} />
        </p>
        <p>
          <button onClick={onDecrement} className="substruction">
            -{state.substruction}
          </button>
          <input type="range" min="1" max="10" value={state.substruction} onChange={this.substructionChange} ref={(input) => this.substructionInput = input}/>
        </p>
      </div>
    )
  }
}

export default connect(state => ({state: state.Counter}))(Counter)
