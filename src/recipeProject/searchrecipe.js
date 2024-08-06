import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchRecipe = () => {
  const [list, setList] = useState([]);
  const [searchedList, setSearchedList] = useState("");
  const [updatedList, setUpdatedList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setList(data.recipes);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const selectHandler = async (e) => {
    const selectedRecipeName = e.target.value;
    setSearchedList(selectedRecipeName);
    await fetchEachRecipe(selectedRecipeName);
  };

  const fetchEachRecipe = async (recipeName) => {
    try {
      const { data, status } = await axios.get(
        `https://dummyjson.com/recipes/search?q=${recipeName}`
      );
      if (status === 200) {
        setUpdatedList(data.recipes);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    border: "2px solid black",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    width: "300px",
    textAlign: "center",
  };

  const imageStyle = {
    borderRadius: "5px",
    marginBottom: "10px",
  };

  return (
    <React.Fragment>
      <h3>Search Recipe</h3>
      <label htmlFor="recipe">Search recipe here:</label>
      <input
        type="text"
        value={searchedList}
        id="recipe"
        onChange={selectHandler}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          display: "block",
          width: "100%",
          maxWidth: "400px",
        }}
      />
      <div style={containerStyle}>
        {updatedList.length > 0 ? (
          updatedList.map((each) => (
            <div key={each.id} style={cardStyle}>
              <img
                src={each.image}
                alt={each.name}
                style={imageStyle}
                height={100}
                width={100}
              />
              <h1 style={{ fontSize: "18px", margin: "10px 0" }}>
                {each.name}
              </h1>
              {/* Add more details if needed */}
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchRecipe;
