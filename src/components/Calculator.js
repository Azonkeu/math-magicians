import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculate extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            <span className="span">0</span>
          </div>
          <div className="numbers">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn oran">/</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn oran">*</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn oran">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn oran">+</button>
            <button type="button" className="btn zero">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn oran">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
