import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Index from "./components/Layout/Index";
import Lyrics from './components/tracks/Lyrics';
import Navbar from "./components/Layout/Navbar";
import {Provider} from './context';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider>
          <Router>
              <React.Fragment>
                  <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route  exact path="/" component={Index} />
                            <Route exact path='/lyrics/track/:id' component={Lyrics} />
                        </Switch>
                    </div>
              </React.Fragment>
          </Router>
      </Provider>        
      </div>
    );
  }
}

export default App;
