const initialState = {
  todos: [
    {
      id: 0,
      text: 'this is my first mission'
    }
  ],
  tempText: ''
}

export default(state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
