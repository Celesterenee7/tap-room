import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from "./components/Header";
import BeerList from "./components/BeerList";
import BeerImage from "./components/BeerImage";
import { Switch, Route } from 'react-router-dom';
import NewBeerForm from './components/NewBeerForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const title = {
  color: "orange",
  textAlign: "center",
  paddingTop: "40px"
}

function App() {
  return (
    <div>
      <NavBar />
      <br/>
      <h1 style={title}>Sunriver Brewery</h1>
      <div className="container">
      <div>
      <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/newbeerform' component={NewBeerForm} />
    </Switch>
      </div>
        <hr/>
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