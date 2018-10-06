import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

///////////////////////////////////// DISPLAYS NAME/////////////////////////////////////////////////////

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName + ' ' + user.middleName
// };
//
// const user = {firstName: 'Andrew',lastName: 'Kimani', middleName: 'Muchiri'};
//
// const element = (
//   <h1>
//     Hiiiiiiiiiiii, {formatName(user)}
//   </h1>
// );



//////////////////////////////////////// DISPLAYS CURRENT TIME/////////////////////////////////////////

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//     this.setState({
//       date:new Date()
//     });
//   }
//
//
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//         <h3>It is {this.state.date.toLocaleTimeString()}!!</h3>
//       </div>
//     )
//   };
// }


//////////////////////////////// SWTICHES BUTTON TO ON AND OFF WHEN CLICKED///////////////////////////////

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//
//
//   render() {
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON':'OFF'}
//       </button>
//     );
//   }
// }


//////////////////////////DISPLAYS MESSAGE IF LOGGED IN
// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }
//
// function GuestGreeting(props) {
//   return <h1>Please Sign Up!</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// ReactDOM.render(
//   <Greeting isLoggedIn={false}/>,
//   document.getElementById('root')
// );


////////////////////////////////LOGIN BUTTON WITH A MESSAGE/////////////////////////////////////
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn:true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn:false});
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//
//     const button = isLoggedIn ? (
//       <LogoutButton onClick={this.handleLogoutClick}/>
//     ) : (
//       <LoginButton onClick={this.handleLoginClick} />
//     );
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     );
//   }
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// };
//
// function LogoutButton(props) {
//   return(
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }
//
// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }
//
// function GuestGreeting(props) {
//   return <h1>Please Sign Up!</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

//////////////////////////////////////////DISPLAY NUMBER OF MESSAGES//////////////////////////////////////
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
//
// const messages = ['Hi Andy','Bye now',"Talk to you later",'I like your jacket'];


//////////////////////////////////////DISPLAY WARNING//////////////////////////////////////////////////////
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//
//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }
//
//
// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning:true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//
//   }
//
//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     })
//   );
//   }
//
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning}/>
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide':'Show'}
//         </button>
//       </div>
//     );
//   }
// }
//


//////////////////////////////////////////DISPLAYS ARRAYS OF VALUES/////////////////////////////////////////
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.post.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//
//   const content = props.post.map((post) =>
//     <div key={post.id}>
//
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//     <hr/>
//     {content}
//     </div>
//   );
// }
//
//
// const posts = [
//   {id:1, title: 'Hello World', content: 'Welcome to learning React'},
//   {id:2, title: 'Installation', content: 'You can install react'}
// ];


/////////////////////////////////////SUBMITS FORM DATA////////////////////////////////////////////////////


// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {value:''},
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//     handleSubmit(event) {
//       alert('A name was submitted:' + this.state.value);
//       event.preventDefault();
//     }
//
//     handleChange(event) {
//       this.setState({value: event.target.value.toUpperCase()});
//       event.preventDefault();
//     }
//
//
//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//
//         <label>Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }


/////////////////////////////////////////SUBMITTING AN ESSAY/////////////////////////////////////////////////


// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       value: 'Please write an essay about your favorite DOM element.'
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value})
//   }
//
  // handleSubmit(event) {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <textarea value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="submit"/>
//       </form>
//     )
//   }
// }

//////////////////////////////////////// SUBMITS SELECTED VALUE FROM OPTIONS/////////////////////////////////////

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {value: 'coconut'};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   handleChange(event) {
//     this.setState = ({
//       value: event.target.value
//     })
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favourite La Croix.
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">lime</option>
//             <option value="coconut">coconut</option>
//           </select>
//         </label>
//       <input value="submit" type="submit"/>
//       </form>
//     )
//   }
// }

///////////////////////////////////////////GUEST RESERVATIONS//////////////////////////////////////
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
//
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
//
//     this.setState({
//       [name]:value
//     });
//   }
//
//   handleSubmit(event) {
//     alert(' Total Guests: ' + this.state.numberOfGuests);
//     event.preventDefault();
//   }
//
//
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Is Going:
//           <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
//         </label>
//         <label>
//           Number of guests:
//           <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
//         </label>
//         <input type="submit" value="submit"/>
//       </form>
//     )
//   }
// }


/////////////////////////////////////////CHANGE TEMP IN CELISUS OR FAHRENHEIT////////////////////////////////////
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//
//     this.state = {temperature:'',scale:'c'}
//   }
//
//
//   handleCelsiusChange(temperature) {
//     this.setState({temperature, scale:'c'});
//   }
//   handleFahrenheitChange(temperature) {
//     this.setState({scale:'f', temperature})
//   }
//
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//
//     return (
//
//     <div>
//       <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
//       <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
//
//       <BoilingVerdict celsius={parseFloat(celsius)}/>
//
//     </div>
//
//
//     );
//
//   }
// }
//
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p> The water would boil.</p>
//   }
//   return <p>The water would not boil</p>
// }
//
//
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// }
//
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''}
//   }
//
//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }
//
//   render() {
//
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//
//
//     return (
//       <fieldset>
//         <legend>
//           Enter temperature in {scaleNames[scale]}:
//         </legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange}
//         />
//       </fieldset>
//     )
//   }
// }
//
// function toCelsius(fahrenheit) {
//   return(fahrenheit - 32) * 5/9;
// }
//
// function toFahrenheit(celsius) {
//   return(celsius * 9/5) + 32;
// }
//
//
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
