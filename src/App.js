import React from 'react';
import classes from './App.module.css';

const App = (props) => {

  return (
    <div className={classes.Calculator}>
      <div className={classes.CalculatorTitle}>
        <p> Calculator </p>
      </div>
      <div className={classes.CalculatorDisplay}>
        <input 
          type='text'
          placeholder='0'
        ></input>
      </div>
      <div className={classes.CalculatorKeypad}>
        <button>AC</button>
        <button>/</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </div>
    </div>
  );
}

export default App;
