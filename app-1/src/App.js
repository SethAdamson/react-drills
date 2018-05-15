import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputData: ""
    }
  }

  userInput(val){
    this.setState({inputData: val})
  }
    render() {
      return (
        <div className="App">
          <input onChange={(e)=> this.userInput(e.target.value)} />
          <h1>{this.state.inputData}</h1>
        </div>
      );
    }
  }
  
  export default App;