import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import combineReducers from '../reducers/Index'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;