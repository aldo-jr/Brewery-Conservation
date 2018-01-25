import React, {Component} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop"
import VerifyAuth from "./components/VerifyAuth"
import {isAuthenticated} from './actions/auth/actionCreator';
import Header from './components/views/Shared/Header'
import Footer from './components/views/Shared/Footer'
import Alerts from './components/views/Shared/Alerts';
import NotFound from "./components/views/404/NotFound"
import Login from './components/views/Login/Login'
import Logout from './components/views/Login/Logout'
import HomePage from './components/views/Home/HomePage'

// Icons
import fontawesome from '@fortawesome/fontawesome'
import solids from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands, solids)

const PrivateRoute = ({children}) => (
  <Route render={props => (
    isAuthenticated() ? (
      children
    ) : (
      <Redirect to={{
        pathname: '/',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

class App extends Component {
  render() {
    axios.interceptors.request.use(
      config => {
        config.headers['x-access-token'] = localStorage.getItem("user");
        return config;
      },
      error => (Promise.reject(error))
    );

    return (
      <Router>
        <ScrollToTop>
          <Header/>
          <Switch>
            <Route exact path="/" component={Login}/>

            <VerifyAuth>
              <PrivateRoute>
                <Switch>
                  <Route exact path="/panel" component={HomePage}/>
                  <Route exact path='/logout' component={Logout}/>
                  <Route component={NotFound}/>
                </Switch>
                <Alerts/>
              </PrivateRoute>
            </VerifyAuth>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;