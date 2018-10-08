import React, { Component } from 'react';
import TravelHead from './head';
import TravelSearch from './search';
import TravelScenery from './scenery';
import TravelCity from './city';
import TravelMaster from './master';
import './travel.scss';

class Travel extends Component {
  state = {
    name: 'Mike',
  }
  render() {
    const name = this.state.name;

    return(
      <div className='travel'>
        <div className='travel__content main'>
          <TravelHead name={name} />
          <TravelSearch />
          <TravelScenery />
          <TravelCity />
          <TravelMaster />
        </div>
      </div>
    )
  }
};

export default Travel;
