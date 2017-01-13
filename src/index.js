import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {createStore} from 'redux'

import './assets/reset.scss'

import App from './App.jsx'
import NoMatch from './components/NoMatch'
import counter from './reducers'

const store = createStore(counter)

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require('./views/Home/index.jsx').default)
      })
    }
  },
  childRoutes: [
    {
      path: 'about',
      getComponent(nextState, callback) {
        require.ensure([], (require) => {
          callback(null, require('./views/About/index.jsx').default)
        })
      }
    }, {
      path: 'counter',
      getComponent(nextState, callback) {
        require.ensure([], (require) => {
          callback(null, require('./views/Counter/index.jsx').default)
        })
      }
    }, {
      path: '*',
      component: NoMatch
    }
  ]
}

const render = () => ReactDOM.render(
  <Router history={browserHistory} routes={routeConfig}/>, document.getElementById('root'))

render()
store.subscribe(render)