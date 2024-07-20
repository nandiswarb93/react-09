// import { Component } from "react";
// import "../data/style.css";

// class Statebox extends Component {
//   state = { squareArray: [] };

//   handleclick = (targetid) => {
//     const newstate = this.boxhandler(this.squareArray, target);
//     this.setState({
//       squareArray: newstate,
//     });
//   };
//   boxhandler = (squareArray, value) => {
//     const updatevalue = squareArray.map((val) => {
//       if (val.id == targetid) {
//         return { ...val, totalcount: totalcount + 1 };
//       } else {
//         return val;
//       }
//     });
//     return updatevalue;
//   };

//   addsquarehandler = () => {
//     const newstate = [...this.state.squareArray, 1];
//     this.setState({
//       squareArray: newstate,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>Adding Boxes task </h1>
//         <button onClick={this.addsquarehandler}>Add Square</button>

//         {this.state.squareArray.map((each, idx) => {
//           return (
//             <div
//               className={(idx + 1) % 2 === 0 ? "square-card" : "square-card2"}
//             >
//               {idx + 1}
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }
// export default Statebox;

// import { Component } from "react";
// import "../data/style.css";

// class Statebox extends Component {
//   state = {
//     squareArray: [],
//   };

//   handleclick = (targetid) => {
//     const newstate = this.boxhandler(this.state.squareArray, targetid);
//     this.setState({
//       squareArray: newstate,
//     });
//   };

//   boxhandler = (squareArray, targetid) => {
//     const updatedArray = squareArray.map((val, idx) => {
//       if (idx === targetid) {
//         return { ...val, color: "blue" }; // Change to desired color
//       } else {
//         return val;
//       }
//     });
//     return updatedArray;
//   };

//   addsquarehandler = () => {
//     const newSquare = {
//       id: this.state.squareArray.length,
//       color: this.state.squareArray.length % 2 === 0 ? "red" : "yellow",
//     };
//     const newstate = [...this.state.squareArray, newSquare];
//     this.setState({
//       squareArray: newstate,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>Adding Boxes task</h1>
//         <button onClick={this.addsquarehandler}>Add Square</button>

//         {this.state.squareArray.map((each, idx) => {
//           return (
//             <div
//               key={idx}
//               className="square-card"
//               style={{ backgroundColor: each.color }}
//               onClick={() => this.handleclick(idx)}
//             >
//               {idx + 1}
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }

// export default Statebox;

import { Component } from "react";
import "../data/style.css";

class Statebox extends Component {
  state = {
    squareArray: [],
  };

  handleClick = (targetId) => {
    const newstate = this.boxHandler(this.state.squareArray, targetId);
    this.setState({
      squareArray: newstate,
    });
  };

  boxHandler = (squareArray, targetId) => {
    const updatedArray = squareArray.map((val, idx) => {
      if (idx === targetId) {
        const newColor =
          val.color === "blue" ? (idx % 2 === 0 ? "red" : "yellow") : "blue";
        return { ...val, color: newColor };
      } else {
        return val;
      }
    });
    return updatedArray;
  };

  addSquareHandler = () => {
    const newSquare = {
      id: this.state.squareArray.length,
      color: this.state.squareArray.length % 2 === 0 ? "red" : "yellow",
    };
    const newstate = [...this.state.squareArray, newSquare];
    this.setState({
      squareArray: newstate,
    });
  };

  render() {
    return (
      <>
        <h1>Adding Boxes task</h1>
        <button onClick={this.addSquareHandler}>Add Square</button>

        {this.state.squareArray.map((each, idx) => {
          return (
            <div
              key={idx}
              className="square-card"
              style={{ backgroundColor: each.color }}
              onClick={() => this.handleClick(idx)}
            >
              {idx + 1}
            </div>
          );
        })}
      </>
    );
  }
}

export default Statebox;
