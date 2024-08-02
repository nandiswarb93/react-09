import React, { Component } from "react";
import axios from "axios";
import "./ApiCall.css";

class JsonTypeApi extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  fetchApi = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res.status === 200) {
        this.setState({ error: false, products: res.data, loader: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: true, loader: true });
    }
  };

  render() {
    return (
      <div className="api-container">
        <button className="api-button" onClick={this.fetchApi}>
          Fetch the data
        </button>
        {this.state.loader ? (
          <h4 className="api-loader">Please wait ..........</h4>
        ) : (
          <div className="api-grid">
            {this.state.products.map((each) => (
              <div className="api-product" key={each.id}>
                <h5>{each.name}</h5>
                <h4>{each.usernmae}</h4>
                <p>{each.email}</p>
                <p>{each.phone}</p>
                <p>{each.website}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default JsonTypeApi;
