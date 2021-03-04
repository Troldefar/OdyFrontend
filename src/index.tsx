import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from "./redux/store";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './components/utils/css/util.css';
import './components/utils/css/keyframes.css';
import './components/utils/css/mq.css';

import Navbar from './components/layout/menu/Navbar';
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
        <Navbar />
        <Notification />
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/friends" component={ Friends } />
          <Route exact path="/game" component={ Game } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/statistics" component={ Statistics } />
          <Route exact path="/" component={ App } />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();