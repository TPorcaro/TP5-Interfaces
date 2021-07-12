import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import StickyFooter from './components/StickyFooter';
import Home from './components/Home'
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
            <Switch>
            <Route exact path="/"
            component={Home}
            >
            </Route>
            <Route exact path="/search"
            component={Search}
            >
            </Route>
            <Route exact path="/detail"
            component={Detail}
            >
            </Route>
            </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
