// import { Component } from "react";
// import axios from "axios";
// import "./placement.css";

// class PlacementTask extends Component {
//   state = {
//     loader: true,
//     arr: [],
//     error: false,
//     photos: [
//       "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//       "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     ],
//   };

//   CallingApi = async () => {
//     try {
//       const answer = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       // for (let i of answer) {
//       //   for (let j in i) {
//       //     for (let k in this.state.photos) {
//       //       if (i == k) {
//       //         answer[i]["images"] = this.state.photos[k];
//       //       }
//       //     }
//       //   }
//       // }
//       // if (answer.status === 200) {
//       //   this.setState({
//       //     arr: answer.data,
//       //     loader: false,
//       //   });
//       console.log(answer)
//       }
//     } catch(error) {
//       this.setState({
//         error: true,
//         loader: false,
//       });
//     }
//   };

//   componentDidMount() {
//     this.CallingApi();
//   }

//   render() {
//     return (
//       <>
//         {this.state.loader ? (
//           <>
//             <h1>please wait</h1>
//           </>
//         ) : (
//           <>
//             <h2>Alumni of Law Cards</h2>
//             <div className="grid">
//               {this.state.arr.map((each) => (
//                 <div key={each.id}>
//                   <p>{each.name}</p>
//                   <p>{each.images}</p>
//                   <p>email : {each.email}</p>
//                   <p>user works at {each["company"]["name"]} </p>
//                   <p>
//                     user address : {each["address"]["street"]}
//                     {each["address"]["suite"]} {each["address"]["city"]}
//                     {each["address"]["zipcode"]}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </>
//     );
//   }
// }
// export default PlacementTask;

// import { Component } from "react";
// import axios from "axios";
// import "./placement.css";

// class PlacementTask extends Component {
//   state = {
//     loader: true,
//     arr: [],
//     error: false,
//     photos: [
//       "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//       "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     ],
//   };

//   CallingApi = async () => {
//     try {
//       const answer = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       const usersWithPhotos = answer.data.map((user, index) => ({
//         ...user,
//         image: this.state.photos[index % this.state.photos.length], // Assign images in a round-robin fashion
//       }));

//       this.setState({
//         arr: usersWithPhotos,
//         loader: false,
//       });
//     } catch (error) {
//       this.setState({
//         error: true,
//         loader: false,
//       });
//     }
//   };

//   componentDidMount() {
//     this.CallingApi();
//   }

//   render() {
//     return (
//       <>
//         {this.state.loader ? (
//           <h1>please wait</h1>
//         ) : this.state.error ? (
//           <h1>Error loading data</h1>
//         ) : (
//           <>
//             <h2>Alumni of Law Cards</h2>
//             <div className="grid">
//               {this.state.arr.map((each) => (
//                 <div key={each.id} className="card">
//                   <img
//                     src={each.image}
//                     alt={each.name}
//                     width={100}
//                     height={150}
//                   />
//                   <p>{each.name}</p>
//                   <p>email: {each.email}</p>
//                   <p>user works at {each.company.name}</p>
//                   <p>
//                     user address: {each.address.street}, {each.address.suite},{" "}
//                     {each.address.city}, {each.address.zipcode}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </>
//     );
//   }
// }

// export default PlacementTask;

// import { Component } from "react";
// import axios from "axios";
// import "./placement.css";

// class PlacementTask extends Component {
//   state = {
//     loader: true,
//     arr: [],
//     error: false,
//     photos: [
//       "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//       "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//       "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     ],
//     searchQuery: "",
//   };

//   CallingApi = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const users = response.data;

//       for (var i = 0; i < users.length; i++) {
//         users[i]["image"] = this.state.photos[i % this.state.photos.length];
//       }

//       this.setState({
//         arr: users,
//         loader: false,
//       });
//     } catch (error) {
//       this.setState({
//         error: true,
//         loader: false,
//       });
//     }
//   };

//   handleSearch = (event) => {
//     this.setState({ searchQuery: event.target.value });
//   };
//   getFilteredUsers = () => {
//     const { arr, searchQuery } = this.state;
//     if (!searchQuery) {
//       return arr;
//     }
//     return arr.filter((user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   componentDidMount() {
//     this.CallingApi();
//   }

//   render() {
//     const filteredUsers = this.getFiltereduser();
//     return (
//       <>
//         {this.state.loader ? (
//           <h1>please wait</h1>
//         ) : this.state.error ? (
//           <h1>Error loading data</h1>
//         ) : (
//           <>
//             <h2>Alumni of Law Cards</h2>
//             <label for="items">search : </label>
//             <input
//               id="items"
//               type="search"
//               placeholder="search fot items"
//               value={this.state.searchQuery}
//               onChange={this.handleSearch}
//             ></input>

//             <div className="grid">
//               {this.state.arr.map(function (each) {
//                 return (
//                   <div key={each.id} className="card">
//                     <img
//                       src={each.image}
//                       alt={each.name}
//                       heigth={200}
//                       width={150}
//                     />
//                     <p>{each.name}</p>
//                     <p>email: {each.email}</p>
//                     <p>user works at {each.company.name}</p>
//                     <p>
//                       user address: {each.address.street}, {each.address.suite},{" "}
//                       {each.address.city}, {each.address.zipcode}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </>
//         )}
//       </>
//     );
//   }
// }

// export default PlacementTask;


import { Component } from "react";
import axios from "axios";
import "./placement.css";

class PlacementTask extends Component {
  state = {
    loader: true,
    arr: [],
    error: false,
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
    searchQuery: "",
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

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getFilteredUsers = () => {
    const { arr, searchQuery } = this.state;
    if (!searchQuery) {
      return arr;
    }
    return arr.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  componentDidMount() {
    this.CallingApi();
  }

  render() {
    const filteredUsers = this.getFilteredUsers();
    return (
      <>
        {this.state.loader ? (
          <h1>Please wait</h1>
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
              value={this.state.searchQuery}
              onChange={this.handleSearch}
            ></input>

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
