import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Results from "./components/results";
import {createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'

let store = createStore(rootReducer);

function render() {

    ReactDOM.render(
    <div className="container">

    <App store={store} /> 
    <hr/> 
    <Results store={store}/>
</div>,
    document.getElementById('root'));
    registerServiceWorker();
}

store.subscribe(render);

render();