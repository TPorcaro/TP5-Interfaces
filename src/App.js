import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import StickyFooter from './components/StickyFooter';
import Card from './components/Card'
import CardGroup from './components/CardGroup';
import SearchBox from './components/SearchBox';
import Advertising from './components/Advertising';
import CardHorizontal from './components/CardHorizontal';
import img1 from './assets/images/casas-busqueda2.jpg';

class App extends Component {
  render() {
    let defaultText = 'bla bla bla bla bla bla';
        let defaultTitle = 'Title';
        let defaultPrice = 5000;
    return (

      // <BrowserRouter basename="./" >
      //      <NavBar></NavBar>
      //     <SearchBox></SearchBox>
      //     <Advertising />
          <div className="margened">
            <CardHorizontal img={img1} type={'casa'} title={defaultTitle} price={defaultPrice} text={defaultText} hasTv={true} hasAirConditioner={true} hasHeater={true} hasWifi={true}></CardHorizontal>
          </div>
      //     <StickyFooter></StickyFooter>
      // </BrowserRouter>
    );
  }
}

export default App;
