import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

class App extends Component {
  constructor(props){
    super(props);
    this.data = props.data;
  }
  random(array){
    console.log(array.length);
    
    let random = Math.floor(Math.random()*array.length);
    return random;
  }
  render() {
    console.log('data: ',data);
    let random = this.random(data.user.favoriteQuotes);
    console.log(random);
    return (
      <div className="App">
        <div className="topHeader">
          <h1>Super Blog</h1>
          <div className="userProfile">
            <div className="name">{data.user.name}</div>
            <div className="quote">{data.user.favoriteQuotes[random]}</div>
            <div className="avatar" style={{
                backgroundImage:`url(${data.user.avatar})`,
            }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
