import CountryApi from "../particularobjectapi/countryapi";
import RandomJoke from "../randomjoke/randomjoke";
import DropDownRecipe from "../recipeProject/dropdown";
import NavBar from "./navbar";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      {/* <h4>This home Screen</h4> */}
      <RandomJoke />

      {/* <CountryApi /> */}
      <DropDownRecipe />
    </>
  );
};
export default HomeScreen;

