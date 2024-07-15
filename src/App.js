import logo from './logo.svg';
import './App.css';

import { UnorderList } from './data/list';
import data from './data/data';
import { Heading } from './data/heading';
import { Image } from './data/image';
import { Name } from './data/name';
import "./data/style.css"
import Conditionalrendering, { ConditionRender } from './conditionalrendering/conditionalrender';

const arr = [1,2,3,4,5,6,6,8]

function App() {
  return (
    <>
    
     
     <Conditionalrendering array={arr}/>

<ConditionRender array={arr}/>







    </>
  );
}

export default App;
