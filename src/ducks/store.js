import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleWare from 'redux-promise-middleware'
import userReducer from './userReducer'
import budgetReducer from './budgetReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleWare))