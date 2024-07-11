import logo from './logo.svg';
import './App.css';

import LoginButton from './component/button';
import Cards from './component/cards';
import Table from './component/table';
import Unorderedlist from './component/ulist';
import Orderedlist from './component/olist';
import Customimage from './component/image';


import IplData from './ipl/ipldata';
import IplImage from './ipl/iplimage';
import IplHeading from './ipl/iplheading';
import Iplcups from './ipl/iplcups';
import Iplplayers from './ipl/iplplayers';
import Iplrunners from './ipl/iplrunners';

const App = () => (
  <div>

    {IplData.map((eachImg) => (
      
      <div  key={eachImg.team} style={{height:"600px",  width:"500px", border:"2px solid black", display:'inline-block'}}>
         
        <IplHeading team={eachImg.team}/>
        <IplImage
          source={eachImg.jerseyimg}
          alternate="ipl image"
          width={300}
          height={300}
        />
        <Iplcups cups={eachImg.cups}/>
        <Iplplayers players={eachImg.players}/>

        <Iplrunners runners={eachImg.runners}/>


      </div>
    ))}
  </div>
);



// function App = ()= {
//   return (
//     <div>
//       {/* <h1>hello</h1>
//       <LoginButton > </LoginButton>
//       <Cards />
//       <Table/>
//       <Unorderedlist/>
//       <Orderedlist/>
//       <Customimage/> */}
//  <iplData/>    
//     </div>
//   );
// }
export default App;

