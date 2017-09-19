import App from './App.jsx'
import NoMatch from './components/NoMatch'

const routeConfig = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (nextState, callback) => {
      require.ensure([], (require) => callback(null, require('./views/Home/index.jsx').default))
    }
  },
  childRoutes: [
    {
      path: 'form',
      getComponent(nextState, callback) {
        require.ensure([], (require) => callback(null, require('./views/Form/index.jsx').default))
      }
    }, {
      path: 'counter',
      getComponent(nextState, callback) {
        require.ensure([], (require) => callback(null, require('./views/Counter/index.jsx').default))
      }
    }, {
      path: 'todo',
      getComponent(nextState, callback) {
        require.ensure([], (require) => callback(null, require('./views/Todo/index.jsx').default))
      }
    }, {
      path: '*',
      component: NoMatch
    }
  ]
}

export default routeConfig
