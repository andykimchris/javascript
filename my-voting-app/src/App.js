import React, { Component } from 'react';
import { voteAngular, voteReact, voteVue } from "./actions/index";

class App extends Component {

  constructor(props) {
    super(props);

    this.store = this.props.store;
  }

  handleVoteAngular = () => {
      this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVue = () => {
    this.store.dispatch(voteVue());
  }

  render() {
    return (
      <div className="jumbotron" style={{textAlign: 'center'}}>
          <img src="martin.jpg" height="120" alt="coding well"></img>
          <h2>What is your favourite front-end framework 2018?</h2>
          <p style={{fontWeight: '100', fontSize:24}}>Click on the logos below to vote!!</p>
          <br/>
          <div className="row">
            <div className="col-xs-4 col-xs-offset-3">
              <img src="martin.jpg" height="90" alt="angular" onClick={this.handleVoteAngular}/>
            </div>
            <div className="col-xs-4">
              <img src="aretha.jpg" height="90"  alt="react" onClick={this.handleVoteReact}/>
            </div>
            <div className="col-xs-4">
              <img src="ella.jpg" height="90" alt="vue" onClick={this.handleVoteVue}/>
            </div>

          </div>
      </div>
    );
  }
}

export default App;
