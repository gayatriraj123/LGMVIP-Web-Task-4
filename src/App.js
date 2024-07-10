// src/App.js
import React from 'react';
import Calculator from './Calculator';
import './App.css'

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '20px', fontSize:'30px' }}>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
