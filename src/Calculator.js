// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <>
        
            <div className="calculator">
            <div className="display">{display}</div>
            <div className="buttons">
                {['1', '2', '3', '/', '4', '5', '6', '-', '7', '8', '9', '+', '.', '0', '=', '*', 'C'].map((item) => (
                <button key={item} onClick={() => handleClick(item)}>
                    {item}
                </button>
                ))}
            </div>
            </div>
        
    </>
  );
};

export default Calculator;
