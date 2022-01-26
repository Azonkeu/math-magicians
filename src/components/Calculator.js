import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const buttonName = e.target.textContent;
    const newObj = calculate(this.state, buttonName);
    this.setState(newObj);
  }

  render() {
    const { next, total, operation } = this.state;
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
            <span className="span">{result}</span>
          </div>
          <div className="numbers">
            <button type="button" className="btn" onClick={this.handleButtonClick}>AC</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>+/-</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>%</button>
            <button type="button" className="btn oran" onClick={this.handleButtonClick}>÷</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>7</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>8</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>9</button>
            <button type="button" className="btn oran" onClick={this.handleButtonClick}>x</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>4</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>5</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>6</button>
            <button type="button" className="btn oran" onClick={this.handleButtonClick}>-</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>1</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>2</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>3</button>
            <button type="button" className="btn oran" onClick={this.handleButtonClick}>+</button>
            <button type="button" className="btn zero" onClick={this.handleButtonClick}>0</button>
            <button type="button" className="btn" onClick={this.handleButtonClick}>.</button>
            <button type="button" className="btn oran" onClick={this.handleButtonClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
