import { Component } from "react";
import axios from "axios";

class CountryCodes extends Component {
  state = {
    loader: true,
    items: [],
    error: false,
  };

  LoadItems = async () => {
    try {
      const answer = await axios.get("https://restcountries.com/v3.1/all");
      console.log(answer.data);

      if (answer.status === 200) {
        this.setState({
          items: answer.data,
          loader: false,
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        loader: false,
      });
    } finally {
      this.setState({
        loader: false,
      });
    }
  };
  componentDidMount() {
    this.LoadItems();
  }

  render() {
    return (
      <div>
        {this.state.loader ? (
          <h1>please wait </h1>
        ) : (
          <>
            <h2>Official Country name : </h2>
            {this.state.items.map((eachCountry) => (
              <p key={eachCountry.cca3}>{eachCountry.name.official}</p>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default CountryCodes;
