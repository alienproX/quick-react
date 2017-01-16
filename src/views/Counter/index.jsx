import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'

class Counter extends Component {
  substructionChange = () => {
    this.props.dispatch({
      type: 'SUBSTRUCTION_CHANGE',
      num: + this.substructionInput.value
    })
  }

  additionChange = (val) => {
    this.props.dispatch({
      type: 'ADDITION_CHANGE',
      num: + this.additionInput.value
    })
  }

  render() {
    const {state, dispatch} = this.props
    const onIncrement = () => dispatch({
      type: 'INCREMENT',
      num: + this.additionInput.value
    })
    const onDecrement = () => dispatch({
      type: 'DECREMENT',
      num: + this.substructionInput.value
    })

    return (
      <div id="Counter">
        Result:
        <span>
          {state.value}
        </span>
        <button onClick={onIncrement}>
          +{state.addition}
        </button>
        <input type="range" min="1" max="10" value={state.addition} onChange={this.additionChange}  ref={(input) => this.additionInput = input} />
        {' '}
        <button onClick={onDecrement} className="substruction">
          -{state.substruction}
        </button>
        <input type="range" min="1" max="10" value={state.substruction} onChange={this.substructionChange} ref={(input) => this.substructionInput = input}/>
      </div>
    )
  }
}

export default connect(state => ({state: state.counterReducer}))(Counter)
