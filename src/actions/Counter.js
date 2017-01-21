export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDITION_CHANGE = 'ADDITION_CHANGE'
export const SUBSTRUCTION_CHANGE = 'SUBSTRUCTION_CHANGE'

export const compute = (type, val) => {
	return {
		type: type === '+' ? 'INCREMENT' : 'DECREMENT',
		num: + val
	}
}

export const numChange = (type, val) => {
	return {
		type: type === '+' ? 'ADDITION_CHANGE' : 'SUBSTRUCTION_CHANGE',
		num: + val
	}
}
