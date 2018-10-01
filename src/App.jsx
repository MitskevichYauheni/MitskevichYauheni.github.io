import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './base/styles/common.scss';
import Travel from './components/travel';
import Location from './components/location';
import Profile from './components/profile';
import NotFound from './components/not-found';
import SideBar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <Router >
        <div className='page'>
          <Switch >
            <Route exact path='/' component={Travel} />
            <Route path='/loc' component={Location} />
            <Route path='/profile' component={Profile} />
            <Route component={NotFound} />
          </Switch>
          <SideBar />
        </div>
      </Router>
    );
  }
}

export default App;
