import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configStore from './store'
import Process from './components/ProcessBar/action'

import './assets/reset.scss'

import App from './App.jsx'
import NoMatch from './components/NoMatch'

const store = configStore()

const process = Process(store)

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (nextState, callback) => {
      process.start()
      require.ensure([], (require) => {
        process.end()
        callback(null, require('./views/Home/index.jsx').default)
      })
    }
  },
  childRoutes: [
    {
      path: 'about',
      getComponent(nextState, callback) {
        process.start()
        require.ensure([], (require) => {
          process.end()
          callback(null, require('./views/About/index.jsx').default)
        })
      }
    }, {
      path: 'counter',
      getComponent(nextState, callback) {
        process.start()
        require.ensure([], (require) => {
          process.end()
          callback(null, require('./views/Counter/index.jsx').default)
        })
      }
    }, {
      path: 'todo',
      getComponent(nextState, callback) {
        process.start()
        require.ensure([], (require) => {
          process.end()
          callback(null, require('./views/Todo/index.jsx').default)
        })
      }
    }, {
      path: '*',
      component: NoMatch
    }
  ]
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routeConfig}/>
</Provider>, document.getElementById('root'))
