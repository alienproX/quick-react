export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RANGECHANGE = 'RANGECHANGE'

export const increment = num => ({type: INCREMENT, num})
export const decrement = num => ({type: DECREMENT, num})
export const rangeChange = num => ({type: RANGECHANGE, num})
