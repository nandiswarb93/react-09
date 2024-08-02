import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FactApi = () => {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    factData();
  }, []);

  const factData = async () => {
    try {
      const { data } = await axios.get(
        "https://dog-api.kinduff.com/api/facts?number=11"
      );
      setFacts(data.facts);
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = () => {
    if (facts.length > 0) {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex]);
    } else {
      alert("No facts found");
    }
  };

  return (
    <Container className="mt-4">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Random Fact About Dogs</Card.Title>
          <Button variant="primary" onClick={submitHandler}>
            Click to get a fact
          </Button>
          {randomFact && <Card.Text className="mt-4">{randomFact}</Card.Text>}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FactApi;
