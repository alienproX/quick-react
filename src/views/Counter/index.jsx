import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.scss'

class Counter extends Component {
  rangeChange = () => {
    this.props.dispatch({
      type: 'RANGECHANGE',
      num: + this.input.value
    })
  }
  render() {
    const {state, dispatch} = this.props
    const onIncrement = () => dispatch({
      type: 'INCREMENT',
      num: + this.input.value
    })
    const onDecrement = () => dispatch({
      type: 'DECREMENT',
      num: + this.input.value
    })

    return (
      <div id="Counter">
        Result:
        <span>
          {state.value}
        </span>
        <button onClick={onIncrement}>
          +{state.randomNum}
        </button>
        {' '}
        <button onClick={onDecrement}>
          -{state.randomNum}
        </button>
        <input type="range" min="1" max="10" value={state.randomNum} onChange={this.rangeChange} ref={(input) => this.input = input}/>
      </div>
    )
  }
}

export default connect(state => ({state: state.counterReducer}))(Counter)
