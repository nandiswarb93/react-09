import CountryApi from "../particularobjectapi/countryapi";
import RandomJoke from "../randomjoke/randomjoke";
import NavBar from "./navbar";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      {/* <h4>This home Screen</h4> */}
      <RandomJoke />

      {/* <CountryApi /> */}
    </>
  );
};
export default HomeScreen;
