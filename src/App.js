import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";

import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
//import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Navbar />
        <Switch>
          <Login exact path="/" component={Login}/>
          <Route exact path="/product" component={ProductList}/> 
          <Route path="/details" component={Details}/> 
          <Route path="/cart" component={Cart}/> 
          <Route component={Default}/> 
        </Switch>
      </React.Fragment>  
    );
  }
}

export default App;