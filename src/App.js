import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from "./components/Header";
import NewBeerForm from './components/NewBeerForm';
import EditBeerForm from './components/EditBeerForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
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
      <Header/>
    <Switch>
      <Route className="navStyle" exact path='/' component={Home} />
      <Route path='/newbeerform' component={NewBeerForm} />
      <Route path='/editbeerform' component={EditBeerForm} />
      <Route component={Error404}/>
    </Switch>
        </div>
    </div>
  );
}

export default App;