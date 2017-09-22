import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
    <div>This is app1 </div>
  </h1>
);
class App1 extends Component {
  render() {
      return (
        // <div className="App">
        //   <div className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h2>Welcome to React</h2>
        //   </div>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code> and save to reload.
        //   </p>
        // </div>
        element
      );
    }
}

export default App1;
