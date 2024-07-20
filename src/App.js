import logo from "./logo.svg";
import "./App.css";




import IplData from "./ipl/ipldata";
import IplImage from "./ipl/iplimage";
import IplHeading from "./ipl/iplheading";
import Iplcups from "./ipl/iplcups";
import Iplplayers from "./ipl/iplplayers";
import Iplrunners from "./ipl/iplrunners";
import "./Ipl.css";

import { UnorderList } from "./data/list";
import data from "./data/data";
import { Heading } from "./data/heading";
import { Image } from "./data/image";
import { Name } from "./data/name";
import "./data/style.css";
import "./Ipl.css";

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
import { Progressbar } from "./ipl/progressbar";

const arr = [1, 2, 3, 4, 5, 6, 6, 8];

const percentage = (input) => {
  return (input / 18) * 100;
};

function App() {
  return (
    <>
      {/* <ConditionRender array={arr} /> */}

      {/* <DemoCarousel /> */}

      {/* <Statename /> */}
      {/* 
      <ApiCall /> */}

      {/* <ApiCall /> */}

      {/* <Counterapp /> */}

      {/* <ApiCall /> */}

      {/* <DummyApi /> */}

      {/* <CountryCodes /> */}

      {/*       
      <Statebox />  */}

      <div>
        <div className="navbar">
          <a>HOME</a>
          <a>IplTeams</a>
          <a>Wins</a>
          <a>Runners</a>
          <a>Board</a>
          <a>Address</a>
          <a>location</a>
          <a>Stadiums</a>
          <a>players</a>
          <a>jersey</a>
        </div>

        <div className="grid">
          {IplData.map((eachImg) => (
            <div key={eachImg.team}>
              <IplHeading team={eachImg.team} />
              <IplImage
                source={eachImg.jerseyimg}
                alternate="ipl image"
                width={150}
                height={150}
              />
              <Iplcups cups={eachImg.cups} />
              {/* <Progressbar scale={percentage(eachImg.cups)} /> */}
              <Iplplayers players={eachImg.players} />

              <Iplrunners runners={eachImg.runners} />
            </div>
          ))}
        </div>
        <div className="footer">
          <p>Done by nandish</p>
        </div>
      </div>

      <CounterApp />
    </>
  );
}

export default App;
