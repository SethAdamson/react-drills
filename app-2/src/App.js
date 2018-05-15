import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      desserts: ['Ice Cream', 'Cake', 'Cookies', 'Brownies', 'Pie', 'Donuts']
    }
  }

    render() {
      let foodList = this.state.desserts.map((elem, i) => {
        return (
          <h2 key={i}>{elem}</h2>
        )
      })
      return (
        <div className="App">
          {foodList}
        </div>
      );
    }
  }
  
  export default App;