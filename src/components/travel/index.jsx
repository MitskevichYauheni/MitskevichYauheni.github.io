import React, { Component } from 'react';
import TravelSearch from './search';
import TravelScenery from './scenery';
import './travel.scss';

class Travel extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Mike',
    }
  }

  render() {
    const name = this.state.name;

    return(
      <div className='travel'>
        <div className='travel__content main'>
          <TravelHead name={name} />
          <TravelSearch />
          <TravelScenery />
        </div>
      </div>
    )
  }
};

const TravelHead = ({ name }) => (
  <div className='travel__head'>
    <p className='travel__text h2'>Hi {name},</p>
    <p className='travel__text h2'>Where do you want to go?</p>
  </div>
);

export default Travel;
