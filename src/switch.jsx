import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Travel from './components/travel';
import Loc from './components/loc';
import Profile from './components/profile';
import NotFound from './components/not-found';

const routes = [
  {
    path: '/',
    exact: true,
    component: Travel,
  },
  {
    path: '/loc',
    component: Loc,
  },
  {
    path: '/profile',
    component: Profile,
  }
];

export default function ItemsSwitch() {
  return (
    <Switch >
      <Redirect from='/travel-app' to='/'/>

      {routes.map((route, i) => (
        <Route key={`route-${i}`} path={route.path} exact={route.exact} component={route.component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}
