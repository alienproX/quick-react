import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {

  render() {
    const {value, dispatch} = this.props
    const onIncrement = () => dispatch({type: 'INCREMENT'})
    const onDecrement = () => dispatch({type: 'DECREMENT'})
    const incrementIfOdd = () => {
      if (this.props.value % 2 !== 0) {
        onIncrement()
      }
    }
    const incrementAsync = () => {
      setTimeout(onIncrement, 1000)
    }
    return (
      <p>
        Clicked: {value}
        times {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

export default connect(state => ({value: state}))(Counter)
