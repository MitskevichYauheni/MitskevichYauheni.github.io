import React, { Component } from 'react';
import PropTypes from 'prop-types';
import People from '../../people';

import './travel-same.scss';

class LocSame extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      maxPeople: 3
    }
  }
  render() {
    const { social, items, length } = this.props.data;
    const maxPeople = this.state.maxPeople;

    return(
      <div className='travel-same'>
        <div className='travel-same__head'>
          <div className='travel-same__head-title text'>Same sity</div>
        </div>

        <div className='travel-same__content'>
          <p className='travel-same__length text'>{length}</p>
          <div className='travel-same__items-wrap'>
            {(items.length !== 0) && <People className='travel-same__items' max={maxPeople} data={items} />}
            <a href={social} className='travel-same__social text-little' target='_blank'>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
};


export default LocSame;

LocSame.propTypes = {
  data: PropTypes.shape({
    social: PropTypes.string,
    items: PropTypes.array,
    length: PropTypes.string,
  })
}
