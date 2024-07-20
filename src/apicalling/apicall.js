import React, { Component } from "react";

import { Progressbar } from "../ipl/progressbar";

import { Image } from "../data/image";

const percentage = (input) => {
  return (input / 5) * 100;
};

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
            <div className="cards-container">
              {this.state.product.map((each) => {
                return (
                  <div className="square-card3" key={each.id}>
                    <h3>{each.title}</h3>
                    <Image
                      path={each.image}
                      alter="Image"
                      wid={100}
                      hei={100}
                    />
                    <p>${each.price}</p>
                    <p>{each.category}</p>
                    <p>{each.description}</p>
                    <Progressbar scale={percentage(each.rating.rate)} />
                    <p>Rating: {each.rating.rate}</p>
                    <p>Reviews: {each.rating.count}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}
export default ApiCall;



