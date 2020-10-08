import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  function handleClick(id){
    axios.get(`https://swapi.dev/api/people?id=${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleClick(1)}>Person 1</button>
        <button onClick={() => handleClick(2)}>Person 2</button>
      </header>
    </div>
  );
}

export default App;
