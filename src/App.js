import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      My To-Do Application
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="FirstComponent"> First Component </div>
  )
}

class SecondComponent extends Component{
  render() {
    return (
      <div className="SecondComponent"> Second Component </div>
    )
  }
}

export default App;
