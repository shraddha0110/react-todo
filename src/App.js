import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash'
      }
      
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
