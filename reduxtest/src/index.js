import './index.css';

import {applyMiddleware, createStore} from 'redux'

import App from './App';
import{Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware() )

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
