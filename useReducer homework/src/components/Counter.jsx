// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

function Counter() {
  const { state, dispatch } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(0);
  const [colorValue, setColorValue] = useState('');
  const [backgroundValue, setBackgroundValue] = useState('');

  const handleIncrement = () => {
    const value = inputValue === 0 ? 1 : parseInt(inputValue, 10);
    dispatch({ type: 'increment', value });
  };

  const handleDecrement = () => {
    const value = inputValue === 0 ? 1 : parseInt(inputValue, 10);
    dispatch({ type: 'decrement', value });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleColorChange = (e) => {
    setColorValue(e.target.value);
    dispatch({ type: 'changeColor', color: e.target.value });
  };

  const handleBackgroundChange = (e) => {
    setBackgroundValue(e.target.value);
    dispatch({ type: 'changeBackground', background: e.target.value });
  };

  return (
    <div>
      <h1>Counter Page</h1>
      <p>Count: {state.count}</p>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(parseInt(e.target.value, 10) || 0)} 
      />
      <input 
        type="text" 
        placeholder="Text Color" 
        value={colorValue} 
        onChange={handleColorChange} 
      />
      <input 
        type="text" 
        placeholder="Background Color" 
        value={backgroundValue} 
        onChange={handleBackgroundChange} 
      />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
