import {PROCESSBAR, NOTIFY_PUSH, NOTIFY_REMOVE} from '../actions'

const initialState = {
  processBarWidth: 0,
  processTransition: '0.2s',
  notify: []
}

export default(state = initialState, action) => {
  switch (action.type) {
    case PROCESSBAR:
      const transition = action.transition ? action.transition : 0.2
      return {...state, processBarWidth: action.val, processTransition: transition + 's'}
    case NOTIFY_PUSH:
      let arr = state.notify
      arr.push(action.val)
      return {...state, notify: arr}
    case NOTIFY_REMOVE:
      let newArr = state.notify.filter( (item) => item.__id !== action.val.__id)
      return {...state, notify: newArr}
    default:
      return state
  }
}
