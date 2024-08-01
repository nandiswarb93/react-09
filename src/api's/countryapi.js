import { useState, useEffect } from "react";
import axios from "axios";

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
        const revampData = res.data.map((eachCountry) => {
          return { id: eachCountry.ccn3, countryName: eachCountry.name.common };
        });
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
    <>
      <div
        style={{ border: "2px solid black", height: "300px", width: "100%" }}
      >
        <h4>Select country to get all details</h4>
        {countryData.length > 0 ? (
          <select onChange={selectHandler}>
            {countryData.map((each) => (
              <option key={each.id} value={each.id}>
                {each.countryName}
              </option>
            ))}
          </select>
        ) : (
          <h3>No countries found</h3>
        )}
        {selectedCountry.name && (
          <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>Capital: {selectedCountry.capital?.[0]}</p>
            <p>Region: {selectedCountry.region}</p>
            <p>Population: {selectedCountry.population}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CountryApi;
