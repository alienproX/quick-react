export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDITION_CHANGE = 'ADDITION_CHANGE'
export const SUBSTRUCTION_CHANGE = 'SUBSTRUCTION_CHANGE'

export const updateData = (props, state) => {
  return {
    compute: (type, val) => {
      props.dispatch({
				type: type === '+' ? INCREMENT : DECREMENT,
				num: + val
			})
    },
    numChange: (type, val) => {
      props.dispatch({
				type: type === '+' ? ADDITION_CHANGE : SUBSTRUCTION_CHANGE,
				num: + val
			})
    }
  }
}
