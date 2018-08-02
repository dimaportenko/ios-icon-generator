import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import logo from './logo.svg';
import './App.css';

const {app} = window.require('electron').remote;

class App extends Component {
  onDrop = (files) => {
    // POST to a test endpoint for demo purposes

    console.log(files)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <Dropzone onDrop={this.onDrop} />
        </div>
      </div>
    );
  }
}

export default App;
