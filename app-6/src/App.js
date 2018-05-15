import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
constructor(){
  super();

  this.state = {
    tasks: [],
    userInput: ''
  }
}

updateInput(val){
  this.setState({userInput: val})
}

updateTasks(){
  this.setState({
    tasks: [...this.state.tasks, this.state.userInput],
    userInput: ''
  })
}

  render() {
    let taskArray = this.state.tasks.map((elem, i)=> {
      return (
        <ToDo key ={i} task ={elem} />
      )
    })
    return (
      <div className="App">
      <h1>My To-Do List</h1>
      <div>
        <input  value = {this.state.userInput}
              placeholder = 'Enter New Task'
              onChange={(e)=> this.updateInput(e.target.value)} 
              />
        <button onClick={()=> this.updateTasks} >Add</button>
        </div>
        <br />
        {taskArray}
      </div>
    );
  }
}

export default App;
