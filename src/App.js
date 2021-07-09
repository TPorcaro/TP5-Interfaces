import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import StickyFooter from './components/StickyFooter';
import Card from './components/Card'
import CardGroup from './components/CardGroup';
import SearchBox from './components/SearchBox';
import Advertising from './components/Advertising';
class App extends Component {
  render() {
    return (

       <BrowserRouter basename="./" >
           <NavBar></NavBar>
          <SearchBox></SearchBox>
          <Advertising />
          <div className="margened">
            <CardGroup></CardGroup>
          </div>
          <StickyFooter></StickyFooter>
      </BrowserRouter>
    );
  }
}

export default App;
