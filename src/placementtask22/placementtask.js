import { Component } from "react";
import axios from "axios";
import "./placement.css";

class PlacementTask extends Component {
  state = {
    loader: true,
    arr: [],
    error: false,
    searchTerm: "",
    photos: [
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    ],
  };

  CallingApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = response.data;

      for (var i = 0; i < users.length; i++) {
        users[i]["image"] = this.state.photos[i % this.state.photos.length];
      }

      this.setState({
        arr: users,
        loader: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };

  componentDidMount() {
    this.CallingApi();
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    let filteredUsers = this.state.arr.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <>
        {this.state.loader ? (
          <h1>please wait</h1>
        ) : this.state.error ? (
          <h1>Error loading data</h1>
        ) : (
          <>
            <h2>Alumni of Law Cards</h2>
            <label htmlFor="items">Search: </label>
            <input
              id="items"
              type="search"
              placeholder="Search for items"
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
            />

            <div className="grid">
              {filteredUsers.map((each) => (
                <div key={each.id} className="card">
                  <img
                    src={each.image}
                    alt={each.name}
                    height={200}
                    width={150}
                  />
                  <p>{each.name}</p>
                  <p>Email: {each.email}</p>
                  <p>User works at {each.company.name}</p>
                  <p>
                    User address: {each.address.street}, {each.address.suite},{" "}
                    {each.address.city}, {each.address.zipcode}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}

export default PlacementTask;
