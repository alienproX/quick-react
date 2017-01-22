import {ADD_TODO, TEXT_CHANGE, REMOVE_TODO} from '../actions/Todo'
import $ from '../untils'

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
    case ADD_TODO:
      let newID = state.todos.length === 0 ? 0 : (state.todos[state.todos.length - 1].id + 1)
      let newTodos = state.todos.concat({id: newID, text: state.tempText})
      return $.merge(state, {
        todos: newTodos,
        tempText: ''
      })
    case REMOVE_TODO:
      let newTodos1 = state.todos
      newTodos1.splice(action.id, 1)
      return $.merge(state, {todos: newTodos1})
    case TEXT_CHANGE:
      return $.merge(state, {tempText: action.text})
    default:
      return state
  }
}
