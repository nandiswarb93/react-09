import { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Container className="mt-4">
      <h3 className="text-center mb-4">Dictionary App</h3>
      <Form onSubmit={submitHandler} className="mb-4">
        <Form.Group controlId="text">
          <Form.Label>Enter word to search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter word to search in dictionary"
            value={word}
            onChange={searchingWord}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      {dict.length > 0 && (
        <Card>
          <Card.Body>
            <Card.Title>Results:</Card.Title>
            {dict.map((entry, index) => (
              <ListGroup key={index} variant="flush">
                <ListGroup.Item>
                  <h5>{entry.word}</h5>
                  {entry.meanings.map((meaning, i) => (
                    <div key={i}>
                      <p>
                        <strong>Part of Speech:</strong> {meaning.partOfSpeech}
                      </p>
                      {meaning.definitions.map((definition, j) => (
                        <p key={j}>
                          <strong>Definition:</strong> {definition.definition}
                        </p>
                      ))}
                    </div>
                  ))}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default DictionaryApi;
