import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import List from './icons/list.svg';
import Loc from './icons/location.svg';
import Profile from './icons/profile.svg';
import "./sidebar.scss";

class SideBar extends Component {
  render() {
    return(
      <div className='sidebar'>
        <div className='sidebar__items main'>
          <SideBarItem activeOnlyWhenExact={true} to='/' icon={<List />} />
          <SideBarItem to='/loc' icon={<Loc />} />
          <SideBarItem to='/profile' icon={<Profile />} />
        </div>
      </div>
    )
  }
};

const SideBarItem = ({ icon, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <Link to={to} className={'sidebar__item' + (match ? ' sidebar__item--active' : '')}>{icon}</Link>
    )}
  />
);

export default SideBar;
