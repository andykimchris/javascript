import './App.css';

import React, { Component } from 'react';

import Postform from './components/Postform';
import  Posts  from "./components/Posts";
import {Provider} from 'react-redux';
import logo from './logo.svg';
import store  from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
      <Postform/>
      <Posts/>    
      </div>

      </Provider>
      
    );
  }
}

export default App;

