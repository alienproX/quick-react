import {PROCESSBAR_START, PROCESSBAR_END} from '../actions'
import merge from './merge'

const initialState = {
  processBarWidth: 0
}

export default(state = initialState, action) => {
  switch (action.type) {
    case PROCESSBAR_START:
      return merge(state, {
        processBarWidth: 0
      })
    case PROCESSBAR_END:
      return merge(state, {
        processBarWidth: '100%'
      })
    default:
      return state
  }
}
