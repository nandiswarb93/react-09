import logo from './logo.svg';
import './App.css';

import { UnorderList } from './data/list';
import data from './data/data';
import { Heading } from './data/heading';
import { Image } from './data/image';
import { Name } from './data/name';
import "./data/style.css"

function App() {
  return (
    <>
     <div className='grid'>
     {
      data["recipes"].map((item)=>(

       <div key={item["name"]} className='box1'> 
         <Heading head={item["name"]}/>
         <Image path={item["image"]} alter={"imge name"} wid={200} hei={200}   />
         <Name  head={"Ingredients"}/>
         <UnorderList array={item["ingredients"]} />

         <Name  head={"Instructions"}/>
         <UnorderList array={item["instructions"]} />
       </div>
      ))
     }
     </div>
    </>
  );
}

export default App;
