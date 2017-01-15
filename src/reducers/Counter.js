import {INCREMENT, DECREMENT, RANGECHANGE} from '../actions'
import initialState from '../store/state'
import merge from './merge'

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return merge(state, {
        counter: {
          value: state.counter.value += action.num
        }
      })
    case DECREMENT:
      return merge(state, {
        counter: {
          value: state.counter.value -= action.num
        }
      })
    case RANGECHANGE:
      return merge(state, {
        counter: {
          randomNum: action.num
        }
      })
    default:
      return state
  }
}
