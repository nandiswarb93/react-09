import NavbarProject from "./navbarproject";
import axios from "axios";
import { useState, useEffect } from "react";
import { UnorderList } from "../data/list";
import CountryApi from "../api's/countryapi";
import DictionaryApi from "../api's/dictionaryapi";
import FactApi from "../api's/factapi";

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
      <h3>
        Welcome to Home screen
        <h1>hiiii this is Home screen</h1>
      </h3>

      <select onChange={selectHandler}>
        {products.map((recipe) => (
          <option value={recipe.id} key={recipe.id}>
            {recipe.name}
          </option>
        ))}
      </select>

      {Object.keys(selectedRecipe).length > 0 && (
        <div style={{ border: "2px solid black" }}>
          <h4>{selectedRecipe.id}</h4>
          <h4>{selectedRecipe.name}</h4>
          <h3>Ingredients</h3>
          <UnorderList array={selectedRecipe.instructions} />
        </div>
      )}

      <CountryApi />

      <DictionaryApi />

      <FactApi />
    </>
  );
};
export default HomeProject;
