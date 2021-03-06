/* 
  * Imports
*/
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from "./redux/store";

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
 * Components
*/
import Notification from './components/el/Notification';
import Register from './components/layout/register/Register';

/*
 * Routes
*/
import { routes } from './components/utils/ts/constants/routes';

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
              <>
                <Component />
              </>
            </AuthRoute>
          ))}
          <Route path="/register" component={Register} />
          <Route render={() => <Redirect to={{pathname: '/'}} />} />
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