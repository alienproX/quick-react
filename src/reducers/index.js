import {PROCESSBAR} from '../actions'
import $ from '../untils'

const initialState = {
  processBarWidth: 0,
  processTransition: '0.2s'
}

export default(state = initialState, action) => {
  switch (action.type) {
    case PROCESSBAR:
      const transition = action.transition ? action.transition : 0.2
      return $.merge(state, {
        processBarWidth: action.val,
        processTransition: transition + 's'
      })
    default:
      return state
  }
}
