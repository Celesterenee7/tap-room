import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BeerList from "./components/BeerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
    <div className='container'>
      <BeerList />
    </div>
    </div>
  );
}

export default App;