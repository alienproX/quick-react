import {createStore} from 'redux'
import initialState from './state'
import reducer from '../reducers'

const configStore = () => createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default configStore
