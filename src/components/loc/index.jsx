import React, { Component } from 'react';
import LocHead from './head';

import SearchSvg from './../../base/icons/search.svg';
import './loc.scss';

class Loc extends Component {
  constructor(){
    super();
    this.state = {
      data: {},
    }
  }
  getData() {
    fetch('https://5bb29ed877063c0014a7d265.mockapi.io/travel/location', {
      method: 'get',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching dates.'))
    .then(result => {
      console.log(result);
      if (result) this.setState({data: result[0]});
    });
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    const data = this.state.data;
    console.log(data);

    return(
      <div className='loc'>
        <div className='loc__content main'>
          {Object.keys(data).length === 0 && <LocNotFound />}
          {(Object.keys(data).length  !== 0) && (
            ((data.head) && <LocHead data={data.head}/>)
          )}
        </div>
      </div>
    )
  }
};

const LocNotFound = () => (
  <div className='loc__not-found'>
    <SearchSvg />
    <p className='loc__not-found-text text'>Nothing found.</p>
    <p className='loc__not-found-text text'>Request is being processed.</p>
  </div>
);

export default Loc;
