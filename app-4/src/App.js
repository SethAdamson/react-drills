import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();

  this.state= {
    username: '',
    password: ''
    }
}

updateUser(val){
  this.setState({username: val})
}

updatePassword(val){
  this.setState({password: val})
}

shout(){
  alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateUser(e.target.value) } />
        <input onChange={(e) => this.updatePassword(e.target.value) } />
        <button onClick={() => this.shout() } >Login</button>
      </div>
    );
  }
}

export default App;
