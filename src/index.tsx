/* 
  * Imports
*/
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from "./redux/store";

import { CSSTransition } from 'react-transition-group'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/* 
  * CSS
*/
import './App.css';
import './components/utils/css/util.css';
import './components/utils/css/keyframes.css';
import './components/utils/css/mq.css';

/* 
  * Hooks
*/
import CheckAuthContext from './hooks/CheckAuthContext';

/* 
  * Elements
*/
import Dashboard from './components/layout/dashboard/Dashboard';
import Friends from './components/layout/dashboard/Friends';
import Game from './components/layout/dashboard/Game';
import Profile from './components/layout/dashboard/Profile';
import Search from './components/layout/dashboard/Search';
import Statistics from './components/layout/dashboard/Statistics';
import Notification from './components/el/Notification';
import App from './App';


/* 
  * Routes
*/
const routes = [
  { path: '/', Component: App, name: 'Home' },
  { path: '/dashboard', Component: Dashboard, name: 'Dashboard' },
  { path: '/friends', Component: Friends, name: 'Friends' },
  { path: '/game', Component: Game, name: 'Game' },
  { path: '/profile', Component: Profile, name: 'Profile' },
  { path: '/search', Component: Search, name: 'Search' },
  { path: '/statistics', Component: Statistics, name: 'Statistics' },
];

/* 
  * Render
*/
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Notification />
        <Switch>
          { routes.map(({ path, Component }) => (
            <AuthRoute key={path} exact component={Component} path={path}>
              {({ match }: any) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  className="route"
                  unmountOnExit
                >
                  <>
                    <Component />
                  </>
                </CSSTransition>
              )}
            </AuthRoute>
          ))}
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  * Auth checker
*/
function AuthRoute({component: Component, ...rest}: any) {
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