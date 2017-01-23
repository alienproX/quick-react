import {UPDATE_FORM} from '../actions/Form'
import $ from '../untils'

const initialState = {
  text: '',
  number: '',
  radio: '',
  checkbox: [],
  select: ''
}

export default(state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      let temp = {}
      temp[action.key] = action.reg ? action.val.replace(new RegExp(action.reg), '') : action.val
      return $.merge(state, temp)
    default:
      return state
  }
}
