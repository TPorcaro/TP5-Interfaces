import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import StickyFooter from './components/StickyFooter';
import Card from './components/Card'
import CardGroup from './components/CardGroup';
import SearchBox from './components/SearchBox';
import Advertising from './components/Advertising';
import Search from './components/Search.js';
import Detail from './components/Detail';
class App extends Component {
  render() {
    let defaultText = 'bla bla bla bla bla bla';
        let defaultTitle = 'Title';
        let defaultPrice = 5000;
    return (
       <BrowserRouter basename="./" >
         <NavBar></NavBar>
            
          <SearchBox></SearchBox>
          <Advertising />
          <div className="margened">
            
            <CardGroup></CardGroup>
          </div>
          <StickyFooter></StickyFooter> 
         {/*  <Search /> */}
      </BrowserRouter>
    );
  }
}

export default App;
