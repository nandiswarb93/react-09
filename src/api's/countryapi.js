import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CountryApi = () => {
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    countryFetchData();
  }, []);

  const countryFetchData = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      if (res.status === 200) {
        const revampData = res.data.map((eachCountry) => ({
          id: eachCountry.ccn3,
          countryName: eachCountry.name.common,
        }));
        setCountryData(revampData);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const selectHandler = async (e) => {
    const selectedCountryId = e.target.value;
    await fetchEachCountry(selectedCountryId);
  };

  const fetchEachCountry = async (countryId) => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryId}`
      );
      setSelectedCountry(res.data[0]);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <h4 className="text-center">Select country to get all details</h4>
          {countryData.length > 0 ? (
            <Form>
              <Form.Group controlId="countrySelect">
                <Form.Control as="select" onChange={selectHandler}>
                  <option value="">Select a country</option>
                  {countryData.map((each) => (
                    <option key={each.id} value={each.id}>
                      {each.countryName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          ) : (
            <h3 className="text-center">No countries found</h3>
          )}
          {selectedCountry.name && (
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>{selectedCountry.name.common}</Card.Title>
                <Card.Text>
                  <strong>Capital:</strong> {selectedCountry.capital?.[0]}
                </Card.Text>
                <Card.Text>
                  <strong>Region:</strong> {selectedCountry.region}
                </Card.Text>
                <Card.Text>
                  <strong>Population:</strong> {selectedCountry.population}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountryApi;
