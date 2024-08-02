import React, { Component } from "react";
import { Image } from "../data/image";
import "./ApiCall.css";

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
      <div className="api-container">
        <button className="api-button" onClick={this.fetchproducts}>
          Fetch the data
        </button>

        {this.state.loader ? (
          <h2 className="api-loader">Please wait .....</h2>
        ) : (
          <div className="api-grid">
            {this.state.product.map((each) => (
              <div className="api-product" key={each.id}>
                <h3>{each.title}</h3>
                <Image path={each.image} alter="Image" wid={100} hei={100} />
                <h4>Price: ${each.price}</h4>
                <h4>Category: {each.category}</h4>
                <h4>Description: {each.description}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ApiCall;
