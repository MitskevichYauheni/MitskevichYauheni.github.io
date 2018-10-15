import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './base/styles/core.scss';
import SideBar from './components/sidebar';
import ItemsSwitch from './switch';

class App extends Component {
  render() {
    return (
      <Router >
        <div className='page'>
          <ItemsSwitch />
          <SideBar />
        </div>
      </Router>
    );
  }
}

export default App;
