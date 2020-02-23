import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import BeerList from './components/BeerList';
import NewBeerControl from './components/NewBeerControl';
import EditBeerControl from './components/EditBeerControl';
import {
  Switch,
  Route
} from 'react-router-dom';
import Error404 from './components/Error404';
import {
  v4
} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const homeBeers = [{
  name: "Vicious Meika IPA",
  brand: "Sun Lover Brewery",
  price: "$6",
  abv: "7",
  key: v4()
}, ];

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        masterBeerList: homeBeers
      };
      this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    }

    handleAddingNewBeerToList(beer) {
      let newMasterBeerList = this.state.masterBeerList.slice();
      newMasterBeerList.push(beer);
      this.setState({
        masterBeerList: newMasterBeerList
      });
    }

    handleEditingBeer(name, brand, price, abv, id) {
      let newMasterBeerList = this.state.masterBeerList.slice();
      newMasterBeerList.forEach(function (b) {
        if (b.key === id) {
          b.name = name;
          b.brand = brand;
          b.price = price;
          b.abv = abv;
        }
      });
      this.setState({
        masterBeerList: newMasterBeerList
      });
    }

    render() {
        return ( 
          <div>
            <NavBar />
            <br />
            <div className = "container" >
            <h1 className = "titleLine" > Sun Lover Brewery </h1> 
            <Header />
            <Switch>
              <Route exact path = '/' render = {() => < BeerList beerList = {this.state.masterBeerList}/>}/>
              <Route path = '/newbeer'render = {() => < NewBeerControl onNewBeerCreation = {this.handleAddingNewBeerToList}/>}/>
              <Route path = '/editbeer' render = {() => < EditBeerControl onEditBeer = {this.handleEditingBeer}/>}/>
              <Route component = {Error404}/>
            </Switch > 
            </div> 
            </div>
          );
        }
      }

export default App;