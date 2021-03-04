import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from "./redux/store";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import './components/utils/css/util.css';
import './components/utils/css/keyframes.css';
import './components/utils/css/mq.css';

import { PropsInterface } from './interfaces/interfaces';
import CheckAuthContext from './hooks/CheckAuthContext';

import Navbar from './components/layout/menu/Navbar';
import LoggedInMenu from './components/layout/menu/LoggedInMenu';
import Notification from './components/el/Notification';

import Dashboard from './components/layout/dashboard/Dashboard';
import Friends from './components/layout/dashboard/Friends';
import Game from './components/layout/dashboard/Game';
import Profile from './components/layout/dashboard/Profile';
import Search from './components/layout/dashboard/Search';
import Statistics from './components/layout/dashboard/Statistics';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Notification />
        <Switch>
          <AuthRoute exact path="/dashboard" component={ Dashboard } />
          <AuthRoute exact path="/friends" component={ Friends } />
          <AuthRoute exact path="/game" component={ Game } />
          <AuthRoute exact path="/profile" component={ Profile } />
          <AuthRoute exact path="/search" component={ Search } />
          <AuthRoute exact path="/statistics" component={ Statistics } />
          <Route exact path="/" component={ App } />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function AuthRoute<Component>({component: Component, ...rest}: any) {
  const user = CheckAuthContext();
  return (
    <Route
      { ...rest }
      render={props => user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      )}
    />
  )
}

reportWebVitals();