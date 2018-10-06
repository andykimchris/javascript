import {applyMiddleware, combineReducers, createStore} from 'redux'

import logger from 'redux-logger'
import mathReducer from './reducers/mathReducer';
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

export default createStore(
    combineReducers({math: mathReducer, user: userReducer}),{}, applyMiddleware(logger, thunk))
