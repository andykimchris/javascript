import './App.css';

import {Main} from '../src/components/Main';
import React from 'react';
import {User} from '../src/components/User';

class App extends React.Component{
  constructor() {
      super();
      this.state = {
          username: "Max"
      };

      this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(newName) {
      this.setState({
          username: newName
      });
  }

  render() {
      return (
          <div className="container">
              <Main changeUsername={this.changeUsername}/>
              <User username={this.state.username}/>
      
          </div>
      );
  }
}

export default App;
