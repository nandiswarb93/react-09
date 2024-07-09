import logo from './logo.svg';
import './App.css';

import LoginButton from './component/button';
import Cards from './component/cards';
import Table from './component/table';
import Unorderedlist from './component/ulist';
import Orderedlist from './component/olist';
import Customimage from './component/image';


function App() {
  return (
    <div>
      <h1>hello</h1>
      <LoginButton > </LoginButton>
      <Cards />
      <Table/>
      <Unorderedlist/>
      <Orderedlist/>
      <Customimage/>
      
      
    </div>
  );
}

export default App;
