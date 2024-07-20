import { Component } from "react";
import axios from "axios";
import { UnorderList } from "../data/list";
import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";

class DummyApi extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");

      console.log(response.data.recipes);
      if (response.status === 200) {
        this.setState({
          products: response.data.recipes,
          loader: false,
        });
      }
    } catch (error) {
      this.setState({
        error: true,
      });
    } finally {
      this.setState({
        loader: false,
      });
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <button onClick={this.fetchProducts}>fetch data</button>
        {this.state.loader ? (
          <h2>please wait ............</h2>
        ) : (
          <>
            <Table striped bordered hover className="mt-4">
              <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Instructions</th>
              </thead>

              <tbody>
                {this.state.products.map((each) => {
                  return (
                    <tr key={each.id}>
                      <td>{each.id}</td>
                      <td>{each.name}</td>
                      <td>
                        <UnorderList array={each.ingredients} />
                      </td>
                      <td>
                        <UnorderList array={each.instructions} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        )}
      </div>
    );
  }
}

export default DummyApi;
