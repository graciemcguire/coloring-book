import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'

class App extends Component {
  state = {
    user: {}
  }


  render() {
    return (
      <div className='root'>
      <MainContainer />
      </div>
    );
  }
}

export default App;
