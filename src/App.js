import logo from "./logo.svg";
import "./App.css";

import IplData from "./ipl/ipldata";
import IplImage from "./ipl/iplimage";
import IplHeading from "./ipl/iplheading";
import Iplcups from "./ipl/iplcups";
import Iplplayers from "./ipl/iplplayers";
import Iplrunners from "./ipl/iplrunners";

import "./Ipl.css";

const App = () => (
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
          <Iplplayers players={eachImg.players} />

          <Iplrunners runners={eachImg.runners} />
        </div>
      ))}
    </div>
    <div className="footer">
      <p>Done by nandish</p>
    </div>
  </div>
);

export default App;
