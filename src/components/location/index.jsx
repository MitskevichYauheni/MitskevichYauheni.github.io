import React, { Component } from 'react';
import './location.scss';

class Location extends Component {
  render() {
    return(
      <div className='location'>
        <div className='location__content main'>
          <p className='location__text text'>location</p>
        </div>
      </div>
    )
  }
};

export default Location;
