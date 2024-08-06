import { useContext } from "react";
import CountryApi from "../particularobjectapi/countryapi";
import RandomJoke from "../randomjoke/randomjoke";
import DropDownRecipe from "../recipeProject/dropdown";
import SearchRecipe from "../recipeProject/searchrecipe";
import NavBar from "./navbar";
import { MyContext } from "./navigation";

const HomeScreen = () => {
  const { username } = useContext(MyContext);
  return (
    <>
      <NavBar />

      <h5>welcome {username}</h5>
      {/* <h4>This home Screen</h4> */}
      {/* <RandomJoke /> */}

      {/* <CountryApi /> */}
      {/* <DropDownRecipe /> */}
      <SearchRecipe />
    </>
  );
};
export default HomeScreen;
