import { Component } from "react";
import "../data/style.css";

class Statebox extends Component {
  state = { squareArray: [] };

  addsquarehandler = () => {
    const newstate = [...this.state.squareArray, 1];
    this.setState({
      squareArray: newstate,
    });
  };

  render() {
    return (
      <>
        <h1>Adding Boxes task </h1>
        <button onClick={this.addsquarehandler}>Add Square</button>

        {this.state.squareArray.map((each, idx) => {
          return (
            // <div
            //   className={(idx + 1) % 2 === 0 ? "square-card" : "square-card2"}
            // >
            //   {idx + 1}
            // </div>

            <div ></div>
          );
        })}
      </>
    );
  }
}
export default Statebox;
