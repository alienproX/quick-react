export const UPDATE_FORM = 'UPDATE_FORM'
export const RESET_FORM = 'RESET_FORM'

export const updateFormAction = (props, key, val, reg) => {
  props.dispatch({type: UPDATE_FORM, key: key, val: val, reg: reg})
}

export const updateSelectAction = (props, e, key) => {
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
}

export const resetAction = (props) => {
  props.dispatch({type: RESET_FORM})
}
