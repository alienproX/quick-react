import {INCREMENT, DECREMENT, ADDITION_CHANGE, SUBSTRUCTION_CHANGE} from '../actions/Counter'

const initialState = {
  addition: 1,
  substruction: 1,
  value: 0
}

export default(state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, value: state.value += action.num}
    case DECREMENT:
      return {...state, value: state.value -= action.num}
    case ADDITION_CHANGE:
      return {...state, addition: action.num}
    case SUBSTRUCTION_CHANGE:
      return {...state, substruction: action.num}
    default:
      return state
  }
}
