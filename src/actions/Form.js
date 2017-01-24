export const UPDATE_FORM = 'UPDATE_FORM'

export const updateData = (props, state) => {
  return {
    updateForm: (key, val, reg) => {
      props.dispatch({type: UPDATE_FORM, key: key, val: val, reg: reg})
    },
    updateSelect: (e, key) => {
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
    submit: () => {
      alert(JSON.stringify(state))
    }
  }
}
