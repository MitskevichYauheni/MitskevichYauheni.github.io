import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import './base/styles/core.scss';
import Travel from './components/travel';
import Loc from './components/loc';
import Profile from './components/profile';
import NotFound from './components/not-found';
import SideBar from './components/sidebar';

const routes = [
  {
    path: '/',
    exact: true,
    component: Travel
  },
  {
    path: '/loc',
    component: Loc
  },
  {
    path: '/profile',
    component: Profile
  }
];

class App extends Component {
  render() {
    return (
      <Router >
        <div className='page'>
          <Switch >
            <Redirect from='/travel-app' to='/'/>

            {routes.map((route, i) => (
              <Route key={`route-${i}`} path={route.path} exact={route.exact} component={route.component} />
            ))}
            <Route component={NotFound} />
          </Switch>
          <SideBar />
        </div>
      </Router>
    );
  }
}

export default App;
