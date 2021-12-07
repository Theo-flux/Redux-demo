const {cakeReducer, buyCake} = require('./cake')
const {iceCreamReducer, buyIceCream} = require('./iceCream')
const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const createStore = redux.createStore
const combineReducers = redux.combineReducers

// create the rootReducer
const rootReducer = combineReducers({
	cakeReducer,
	iceCreamReducer
})

// Redux store holding the application state 
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial State', store.getState())
const unsubscribe = store.subscribe(()=>{
	console.log(store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
 
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// unsubscribe from the store
// unsubscribe()


