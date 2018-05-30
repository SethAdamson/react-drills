import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
          <Link to='./'><h1>Home</h1></Link>
          <Link to='./signup'><h1>Signup</h1></Link>
          <Link to='./details'><h1>Details</h1></Link>
          </ul>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
