import { createStore, applyMiddleware} from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    apiMiddleware
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
