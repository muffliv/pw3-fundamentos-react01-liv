import { useState, useEffect} from 'react';
import './App.css';
import Users from './components/Users';
import CreateUsers from './components/CreateUsers';


function App() {

  return (
    <div className="App">
      {/* <h1>ACESSANDO E CONSUMINDO API DE TESTES REQRES</h1> */}
      {/* <Users/> */}
      <CreateUsers/>
    </div>
  );
}

export default App;
