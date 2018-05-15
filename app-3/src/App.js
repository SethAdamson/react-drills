import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      desserts: ['Ice Cream', 'Cake', 'Cookies', 'Brownies', 'Pie', 'Donuts'],
      userInput: ''
    }
    
  }

updateData(val){
  this.setState({userInput: val})
}

    render() {
      let foodList = this.state.desserts.filter((elem, i) => {
        return elem.includes(this.state.userInput);
        }).map((elem, i) => {
        return <h2 key={i}>{elem}</h2>
      })
      
      return (
        <div className="App">
        <input onChange={(e)=> this.updateData(e.target.value) } />
          {foodList}
        </div>
      );
    }
  }
  
  export default App;