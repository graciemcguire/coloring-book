import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    user: {}
  }
    
  render() {
    return (
      <MainContainer />
    );
  }
}

export default App;
