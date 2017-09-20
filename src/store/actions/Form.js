export const UPDATE_FORM = 'UPDATE_FORM'
export const RESET_FORM = 'RESET_FORM'
import {NOTIFY_PUSH, NOTIFY_REMOVE} from './index.js'

export const updateData = {
  updateSelect: (props, e, key) => {
    let orginalArray = props.state[key]
    let isChecked = e.target.checked
    let value = e.target.value
    if (isChecked) {
      orginalArray.push(value)
    } else {
      orginalArray.splice(orginalArray.indexOf(value), 1)
    }
    orginalArray = [...new Set(orginalArray)]
    props.dispatch({type: UPDATE_FORM, key: key, val: orginalArray})
  },
  updateForm: (props, key, val, reg) => {
    props.dispatch({type: UPDATE_FORM, key: key, val: val, reg: reg})
  },
  reset: (props) => {
    props.dispatch({type: RESET_FORM})
  },
  notify: (props, val) => {
    val.__id = Math.random()
    val.__remove = (item) => {
      props.dispatch({type: NOTIFY_REMOVE, val: item})
    }
    val.showClose = true
    val.delay = 0
    props.dispatch({type: NOTIFY_PUSH, val: val})
  }
}
