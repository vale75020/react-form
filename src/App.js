import React, { Component } from 'react';
import Form from './components/Form'
import Form2 from './components/Form2'
import PracticeForm from './components/PracticeForm'
import Discomponent from './components/FormContainer'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Form />
       <br />
       <Form2 />
       <br />
       <PracticeForm />
       <br />
       <Discomponent />
      </div>
    );
  }
}

export default App;
