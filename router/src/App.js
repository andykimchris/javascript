import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';

import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Home from './components/home';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route component={Error}/>
          </Switch>
        </div>


      </BrowserRouter>
    );
  }
}

export default App;
