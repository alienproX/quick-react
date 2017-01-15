import {INCREMENT, DECREMENT, RANGECHANGE} from '../actions'
import merge from './merge'

const initialState = {
  randomNum: 1,
  value: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return merge(state, {
        value: state.value += action.num
      })
    case DECREMENT:
      return merge(state, {
        value: state.value -= action.num
      })
    case RANGECHANGE:
      return merge(state, {randomNum: action.num})
    default:
      return state
  }
}
