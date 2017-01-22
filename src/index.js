import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configStore from './store'
import Process from './components/ProcessBar/action'
import FastClick from 'fastclick'

import './assets/reset.scss'

import App from './App.jsx'
import NoMatch from './components/NoMatch'

const store = configStore()

const setProcess = Process(store)

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (nextState, callback) => {
      setProcess.start()
      require.ensure([], (require) => {
        setProcess.end()
        callback(null, require('./views/Home/index.jsx').default)
      })
    }
  },
  childRoutes: [
    {
      path: 'about',
      getComponent(nextState, callback) {
        setProcess.start()
        require.ensure([], (require) => {
          setProcess.end()
          callback(null, require('./views/About/index.jsx').default)
        })
      }
    }, {
      path: 'counter',
      getComponent(nextState, callback) {
        setProcess.start()
        require.ensure([], (require) => {
          setProcess.end()
          callback(null, require('./views/Counter/index.jsx').default)
        })
      }
    }, {
      path: 'todo',
      getComponent(nextState, callback) {
        setProcess.start()
        require.ensure([], (require) => {
          setProcess.end()
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

FastClick.attach(document.body)
