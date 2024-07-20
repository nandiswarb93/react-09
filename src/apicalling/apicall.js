import React, { Component } from "react";

import { Image } from "../data/image";

class ApiCall extends Component {
  state = {
    product: [],
    loader: true,
    error: false,
  };
  fetchproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => this.setState({ product: data, loader: false }));
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchproducts}>fetch the data</button>

        {this.state.loader ? (
          <h2>please wait .....</h2>
        ) : (
          <>
            {this.state.product.map((each) => {
              return (
                <div className="square-card3">
                  <h3>{each.title}</h3>
                  <Image path={each.image} alter="Image" wid={100} hei={100} />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default ApiCall;
