import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4c_Ksfgz7Y3VtxgR9vltd1MSvk0Xkp0dJA&s"
            style={{ height: "200px", width: "100%" }}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4c_Ksfgz7Y3VtxgR9vltd1MSvk0Xkp0dJA&s"
            style={{ height: "200px", width: "100%" }}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PJlByzj1AjgesZTFn-YDrN7xF3djGS2eJg&s"
            style={{ height: "200px", width: "100%" }}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
