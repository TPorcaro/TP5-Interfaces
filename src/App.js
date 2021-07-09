import './App.css';
import React, { Component } from 'react';
import { BrowserRouter/* , Route, Switch, Redirect  */} from 'react-router-dom';
/* import NavBar from './components/NavBar';
 */import StickyFooter from './components/StickyFooter';
import SearchBox from './components/SearchBox';
import Advertising from './components/Advertising';
/* import CardHome from './components/CardHome'
 */
class App extends Component {

  render() {
    return (
      <BrowserRouter basename="./" >
          <SearchBox></SearchBox>
          <Advertising />
          <StickyFooter></StickyFooter>
      </BrowserRouter>
    );
  }
}

export default App;
