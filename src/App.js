import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

class App extends Component {
  constructor(props){
    super(props);
    this.data = props.data;
  }
  render() {
    console.log('data: ',data);
    return (
      <div className="App">
        <h1>Super Blog</h1>
      </div>
    );
  }
}

export default App;
