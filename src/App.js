import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/views/Shared/Header'
import NotFound from "./components/views/404/NotFound";
import HomePage from './components/views/Home/HomePage';

// Icons
import fontawesome from '@fortawesome/fontawesome'
import solids from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands, solids)

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route component={NotFound}/>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
