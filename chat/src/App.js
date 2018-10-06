// import './App.css';

// import React, { Component } from 'react';

// import Postform from './components/Postform';
// import  Posts  from "./components/Posts";
// import {Provider} from 'react-redux';
// import logo from './logo.svg';
// import store  from './store'

// class App extends Component {

//   render() {
//     return (
//       <Provider store={store}>

//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
      
//       <Postform/>
//       <Posts/>    
//       </div>

//       </Provider>
      
//     );
//   }
// }

// export default App;

import './App.css';

import React, { Component } from 'react';

import { AddMessage } from './containers/AddMessage'
import {MessagesList} from './containers/MessagesList'
import {Sidebar} from "./containers/Sidebar"

class App extends Component {
  render() {
    return (
      <div className="container">
      <Sidebar/>
      <section id="main">
       <MessagesList/>
       <AddMessage/>
      </section>
      </div>
    );
  }
}

export default App;
