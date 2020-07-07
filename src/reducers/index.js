import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import loading from './loading'

const appReducer = combineReducers({
  router,
  loading,
})

export default (state, action) => {
  return appReducer(state, action)
}
