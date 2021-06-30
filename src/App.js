import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import StickyFooter from './components/StickyFooter';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename="./" >
          <NavBar></NavBar>
          <StickyFooter></StickyFooter>
      </BrowserRouter>
    );
  }
}

export default App;
