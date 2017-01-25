import {UPDATE_FORM, RESET_FORM} from '../actions/Form'
import $ from '../untils'

const initialState = {
  text: '',
  number: '',
  radio: '',
  checkbox: [],
  select: ''
}

export default(state = $.stateClone(initialState), action) => {
  switch (action.type) {
    case UPDATE_FORM:
      let temp = {}
      temp[action.key] = action.reg ? action.val.replace(new RegExp(action.reg), '') : action.val
      return {...state, ...temp}
    case RESET_FORM:
      return $.stateClone(initialState)
    default:
      return state
  }
}
