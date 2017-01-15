import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import { Provider } from 'react-redux'
import configStore from './store'

import './assets/reset.scss'

import App from './App.jsx'
import NoMatch from './components/NoMatch'

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

ReactDOM.render(
  <Provider store={configStore()}>
    <Router history={browserHistory} routes={routeConfig}/>
  </Provider>, document.getElementById('root'))
