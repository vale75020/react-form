import React, { Component } from 'react';
import Form from './components/Form'
import Form2 from './components/Form2'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Form />
       <br />
       <Form2 />
      </div>
    );
  }
}

export default App;
