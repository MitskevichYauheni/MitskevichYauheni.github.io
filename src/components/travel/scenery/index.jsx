import React, { Component } from 'react';
import './travel-scenery.scss';

class TravelScenery extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      left: 0,
    }
    this.more = this.more.bind(this);
  }
  more() {

  }
  render() {
    const left = this.state.left;

    return(
      <div className='travel-scenery'>
        <div className='travel-scenery__head'>
          <div className='travel-scenery__head-left'>
            <div className='travel-scenery__head-title text'>Daily Scenery</div>
            <div className='travel-scenery__head-label text-little'>Updated</div>
          </div>

          {(left !== 0) && <a className='travel-scenery__more text-little' onclick={this.more}>More</a>}
        </div>
      </div>
    )
  }
};

export default TravelScenery;
