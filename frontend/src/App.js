import React, { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm';

class App extends Component {
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <ContactForm/>
      </div>
    );
  }
}

export default App;