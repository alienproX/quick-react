import {combineReducers, createStore} from 'redux'
import headerReducer from './reducers'
import counterReducer from './reducers/Counter'
import todoReducer from './reducers/Todo'
import formReducer from './reducers/Form'


const rootReducer = combineReducers({
	Header: headerReducer,
	Counter: counterReducer,
	Todo: todoReducer,
	Form: formReducer
})

const configStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configStore
