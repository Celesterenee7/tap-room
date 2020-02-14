import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BeerList from "./components/BeerList";
import BeerImage from "./components/BeerImage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <BeerList />
                    </div>
                    <div className="col-md-6">
                        <BeerImage />
                    </div>
                </div>
            </div>
    </div>
  );
}

export default App;