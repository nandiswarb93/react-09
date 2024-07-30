import logo from "./logo.svg";
import "./App.css";

import { UnorderList } from "./data/list";
import data from "./data/data";
import { Heading } from "./data/heading";
import { Image } from "./data/image";
import { Name } from "./data/name";
import "./data/style.css";
import { ConditionRender } from "./conditionalrendering/conditionalrender";
import Statename from "./statecomponent/statename";
import Statebox from "./statecomponent/statecomponentbox";
import CounterApp from "./statecomponent/statecomponent";
import ApiCall from "./apicalling/apicall";

import Counterapp from "./statecomponent/funccounterapp";
import DummyApi from "./axiosapicalling/receipesapi";
import CountryCodes from "./axiosapicalling/countrycodes";

import PlacementTask from "./placementtask22/placementtask";
import RecipeTable from "./hooks/RecipeTable";
import Boxes from "./hooks/squarebox";
import UseeffectRecipe from "./hooks/useEffect/UseEffectReciepe";
import WhetherApi from "./hooks/useEffect/whetherapi";
import FormValidation from "./hooks/useEffect/useEffect2/forms";
import RegistrationForm from "./hooks/useEffect/useEffect2/registrationform";
import UncontrolledForm from "./hooks/useEffect/useEffect2/apitest";
import ControlForm from "./hooks/useEffect/controlledforms/controlForm";
import RegistrationFormWithValidation from "./hooks/useEffect/controlledforms/registrationform";
import DifferentInput from "./hooks/useEffect/controlledforms/differentInputs";
import NavigationStack from "./navigation/navigation";
import NavigationPoject from "./recipeproject/navigationproject";

const arr = [1, 2, 3, 4, 5, 6, 6, 8];

// function App() {
//   return (
//     <>
//       {/* <ConditionRender array={arr} /> */}
//       {/* <Statename /> */}
//       {/* <CounterApp /> */}
//       {/* <Statebox /> */}
//       {/* <ApiCall /> */}
//       {/* <Counterapp /> */}
//       {/* <ApiCall /> */}
//       {/* <DummyApi /> */}
//       {/* <CountryCodes /> */}
//       {/* <PlacementTask /> */}
//       {/* <RecipeTable /> */}
//       {/* <Boxes /> */}
//       {/* <UseeffectRecipe /> */}
//       {/* <WhetherApi /> */}
//       {/* <FormValidation /> */}
//       {/* <RegistrationForm /> */}
//       {/* <UncontrolledForm /> */}
//       {/* <ControlForm /> */}

//       <RegistrationFormWithValidation />

//       <DifferentInput />
//     </>
//   );
// }

function App() {
  return (
    <>
      {/* <NavigationStack /> */}
      {/* <PlacementTask /> */}

      <NavigationPoject />
    </>
  );
}

export default App;
