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

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          masterBeerList: [],
      };
      this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(
          this
      );
  }

  handleAddingNewBeerToList(newBeer) {
      this.setState({masterBeerList: [newBeer, ...this.state.masterBeerList],});
  }

  render() {

  return (
    <div>
      <NavBar />
      <br/>
      <h1 className="title">Sunriver Brewery</h1>
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
}

export default App;