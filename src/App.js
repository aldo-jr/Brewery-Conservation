import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"
import Header from './components/views/Shared/Header'
import Footer from './components/views/Shared/Footer'
import NotFound from "./components/views/404/NotFound"
import Login from './components/views/Login/Login'
import HomePage from './components/views/Home/HomePage'


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
            <Route exact path="/" component={Login}/>
            <Route exact path="/panel" component={HomePage}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;