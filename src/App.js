import React from 'react';
import Calculate from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculate />
      </div>
    );
  }
}

export default App;
