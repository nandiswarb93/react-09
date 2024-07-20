import logo from "./logo.svg";
import "./App.css";

import { UnorderList } from "./data/list";
import data from "./data/data";
import { Heading } from "./data/heading";
import { Image } from "./data/image";
import { Name } from "./data/name";
import "./data/style.css";
import Conditionalrendering, {
  ConditionRender,
} from "./conditionalrendering/conditionalrender";
import Statename from "./statecomponent/statename";
import Statebox from "./statecomponent/statecomponentbox";
import CounterApp from "./statecomponent/statecomponent";
import ApiCall from "./apicalling/apicall";

import Counterapp from "./statecomponent/funccounterapp";
import DummyApi from "./axiosapicalling/receipesapi";
import CountryCodes from "./axiosapicalling/countrycodes";
import DemoCarousel from "../src/statecomponent/carasoul";

const arr = [1, 2, 3, 4, 5, 6, 6, 8];

function App() {
  return (
    <>
      <ConditionRender array={arr} />

      <DemoCarousel />

      <CounterApp />

      <Statename />

      <ApiCall />

      {/* 
      <Statebox /> */}

      {/* <ApiCall /> */}

      {/* <Counterapp /> */}

      {/* <ApiCall /> */}

      {/* <DummyApi /> */}

      {/* <CountryCodes /> */}
    </>
  );
}

export default App;
