import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculate() {
  const [object, setObject] = useState({});

  const handleButtonClick = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate(object, buttonName);
    setObject(newObj);
  };

  const { next, total, operation } = object;
  let result = '';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span className="span">{result || 0}</span>
        </div>
        <div className="numbers">
          <button type="button" className="btn" onClick={handleButtonClick}>AC</button>
          <button type="button" className="btn" onClick={handleButtonClick}>+/-</button>
          <button type="button" className="btn" onClick={handleButtonClick}>%</button>
          <button type="button" className="btn oran" onClick={handleButtonClick}>÷</button>
          <button type="button" className="btn" onClick={handleButtonClick}>7</button>
          <button type="button" className="btn" onClick={handleButtonClick}>8</button>
          <button type="button" className="btn" onClick={handleButtonClick}>9</button>
          <button type="button" className="btn oran" onClick={handleButtonClick}>x</button>
          <button type="button" className="btn" onClick={handleButtonClick}>4</button>
          <button type="button" className="btn" onClick={handleButtonClick}>5</button>
          <button type="button" className="btn" onClick={handleButtonClick}>6</button>
          <button type="button" className="btn oran" onClick={handleButtonClick}>-</button>
          <button type="button" className="btn" onClick={handleButtonClick}>1</button>
          <button type="button" className="btn" onClick={handleButtonClick}>2</button>
          <button type="button" className="btn" onClick={handleButtonClick}>3</button>
          <button type="button" className="btn oran" onClick={handleButtonClick}>+</button>
          <button type="button" className="btn zero" onClick={handleButtonClick}>0</button>
          <button type="button" className="btn" onClick={handleButtonClick}>.</button>
          <button type="button" className="btn oran" onClick={handleButtonClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
