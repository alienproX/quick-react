import {INCREMENT, DECREMENT, ADDITION_CHANGE, SUBSTRUCTION_CHANGE} from '../actions/Counter'
import merge from './merge'

const initialState = {
  addition: 1,
  substruction: 1,
  value: 0
}

export default(state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return merge(state, {
        value: state.value += action.num
      })
    case DECREMENT:
      return merge(state, {
        value: state.value -= action.num
      })
    case ADDITION_CHANGE:
      return merge(state, {addition: action.num})
    case SUBSTRUCTION_CHANGE:
      return merge(state, {substruction: action.num})
    default:
      return state
  }
}
