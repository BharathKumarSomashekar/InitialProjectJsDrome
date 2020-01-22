import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  }
  increment = () => {
    const currentVal = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentVal + 2,
    });
  }
  decrement = () => {
    const currentVal = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentVal - 2,
    });
  }
  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
  }
}

render(<App />, document.getElementById('root'));