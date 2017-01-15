import {combineReducers, createStore} from 'redux'
import counterReducer from '../reducers/Counter'
import todoReducer from '../reducers/Todo'

const rootReducer = combineReducers({
    counterReducer,
		todoReducer
})

const configStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configStore
