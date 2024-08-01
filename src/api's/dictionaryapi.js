import { useState } from "react";
import axios from "axios";

const DictionaryApi = () => {
  const [word, setWord] = useState("");
  const [dict, setDict] = useState([]);

  const dictApi = async (enteredWord) => {
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord}`
      );
      setDict(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  const searchingWord = (event) => {
    const enteredWord = event.target.value;
    setWord(enteredWord);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (word.length > 0) {
      dictApi(word);
      console.log("success");
    } else {
      alert("Enter a word, don't leave it empty");
    }
  };

  return (
    <>
      <div
        style={{ border: "2px solid black", height: "300px", width: "100%" }}
      >
        <h3>Dictionary App</h3>
        <form onSubmit={submitHandler}>
          <label htmlFor="text">Enter words to search</label>
          <input
            type="text"
            id="text"
            placeholder="Enter word to search in dictionary"
            value={word}
            onChange={searchingWord}
          />
          <button type="submit">Search</button>
        </form>
        {dict.length > 0 && (
          <div>
            <h4>Results:</h4>
            {dict.map((entry, index) => (
              <div key={index}>
                <h5>{entry.word}</h5>
                {entry.meanings.map((meaning, i) => (
                  <div key={i}>
                    <p>Part of Speech: {meaning.partOfSpeech}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DictionaryApi;
