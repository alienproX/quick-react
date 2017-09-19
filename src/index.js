import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configStore from './store'
import FastClick from 'fastclick'

import './assets/reset.scss'

import routeConfig from './router'
const store = configStore()

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routeConfig}/>
</Provider>, document.getElementById('root'))

FastClick.attach(document.body)
