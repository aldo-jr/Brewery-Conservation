import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleweare from 'redux-thunk';
import {reducer as reduxFormReducer} from 'redux-form'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/style.min.css';

const dest = document.getElementById('root');

const reducer = combineReducers({
  form: reduxFormReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleweare))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  dest
)

registerServiceWorker()