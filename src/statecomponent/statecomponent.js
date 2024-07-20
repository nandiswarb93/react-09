import { Component } from "react";


import "../statecomponent/style.css";

class CounterApp extends Component {
  state = {
    count: 0,
  };

  increment(value) {
    this.setState({ count: this.state.count + value });
  }
  decrement() {
    this.setState({ count: this.state.count == 0 ? 0 : this.state.count - 1 });
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <>
        <div className="counter">
          <h2>Counter app </h2>
          <h4>{this.state.count}</h4>
          <button onClick={() => this.increment(1)}>+</button>
          <button onClick={() => this.decrement()}>-(NON Negative)</button>
          <button onClick={() => this.reset()}>reset</button>
        </div>
      </>
    );
  }
}

export default CounterApp;
