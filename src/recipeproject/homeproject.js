import NavbarProject from "./navbarproject";
import axios from "axios";
import { useState, useEffect } from "react";
import { UnorderList } from "../data/list";
import CountryApi from "../api's/countryapi";
import DictionaryApi from "../api's/dictionaryapi";
import FactApi from "../api's/factapi";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoUseReducer from "../hooks/usereducer/usereducer";

const HomeProject = () => {
  const [products, setProducts] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setProducts(response.data.recipes);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const selectHandler = (event) => {
    const recipeId = event.target.value;
    fetchEachRecipe(recipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/${recipeId}`
      );
      setSelectedRecipe(data);
      console.log(data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  return (
    <>
      <NavbarProject />
      {/* <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Welcome to Home Screen</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  hiiii this is Home screen
                </Card.Subtitle>

                <Form>
                  <Form.Group controlId="recipeSelect">
                    <Form.Label>Select Recipe</Form.Label>
                    <Form.Control as="select" onChange={selectHandler}>
                      {products.map((recipe) => (
                        <option value={recipe.id} key={recipe.id}>
                          {recipe.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form>

                {Object.keys(selectedRecipe).length > 0 && (
                  <Card className="mt-3">
                    <Card.Body>
                      <Card.Title>{selectedRecipe.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        ID: {selectedRecipe.id}
                      </Card.Subtitle>
                      <Card.Text>
                        <h4>Ingredients</h4>
                        <UnorderList array={selectedRecipe.instructions} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <CountryApi />
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <DictionaryApi />
              </Card.Body>
            </Card>
            <Card className="mb-3">
              <Card.Body>
                <FactApi />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <TodoUseReducer />
    </>
  );
};

export default HomeProject;
