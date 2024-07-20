import { Component } from "react";

class Statename extends Component {
  state = { count: 0 };

  increment(value) {
    this.setState({
      count: this.state.count + value,
    });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div className="counter">
        <h1>Normal Counter App</h1>
        <h1>{this.state.count} </h1>

        <button onClick={() => this.increment(1)}>+</button>

        <button onClick={() => this.decrement()}>-</button>

        <button onClick={() => this.reset()}>reset</button>
      </div>
    );
  }
}

export default Statename;
