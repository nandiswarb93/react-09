import { useEffect, useState } from "react";
import axios from "axios";
import "./random.css";
const RandomJoke = () => {
  const [joke, setJoke] = useState([]);
  const [error, setError] = useState(false);
  const [random, setRandom] = useState(null);
  useEffect(() => {
    fetchJokeApi();
  }, []);

  const fetchJokeApi = async () => {
    try {
      const res = await axios.get(
        "https://official-joke-api.appspot.com/jokes/random/250"
      );
      if (res.status == 200) {
        setJoke(res.data);
        setError(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const submitHandler = () => {
    if (joke.length > 0) {
      const randomValue = Math.floor(Math.random() * joke.length);
      setRandom(joke[randomValue]);
      console.log("success");
    } else {
      alert("No jokes found");
    }
  };
  return (
    <>
      <div className="box">
        <h3>Random Joke Generator</h3>
        <button onClick={submitHandler}>Click to get a Joke</button>
        {random && (
          <div
            style={{ height: 100, width: "100%", border: "2px solid black" }}
          >
            <p style={{ color: "red" }}>{random.setup}</p>
            <p style={{ color: "blue" }}>{random.punchline}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default RandomJoke;
