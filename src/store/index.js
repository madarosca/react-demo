import { createStore, compose } from 'redux'
import appReducer from '../reducers'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState = {}

const store = createStore(appReducer, initialState, storeEnhancers())

// Set globals

global.dispatch = (type, payload) => {
	if (type.type) {
		return Promise.resolve(store.dispatch(type))
	} else {
		return Promise.resolve(store.dispatch({ type, payload }))
	}
}
global.getState = store.getState

export default store
