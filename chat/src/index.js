import './index.css';

import {applyMiddleware, createStore} from 'redux'

import App from './App';
import{Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import handleNewMessage from './sagas'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import setupSocket from './sockets'
import username from './utils/name'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware) )

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
