import axios from "axios";
import React, { useEffect, useState } from "react";

const DropDownRecipe = () => {
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

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
    await fetchEachRecipe(selectedRecipeName);
  };

  const fetchEachRecipe = async (recipeName) => {
    try {
      const { data, status } = await axios.get(
        `https://dummyjson.com/recipes/${recipeName}`
      );
      if (status === 200) {
        setSelectedList(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <h3>Drop down recipe</h3>
      <select onChange={selectHandler}>
        <option value="">Select a recipe</option>
        {list.map((each) => (
          <option key={each.id} value={each.id}>
            {each.name}
          </option>
        ))}
      </select>
      {selectedList && (
        <div key={selectedList.id}>
          <h1>{selectedList.name}</h1>
          <p>{selectedList.description}</p>
          <p>{selectedList.instructions}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default DropDownRecipe;
