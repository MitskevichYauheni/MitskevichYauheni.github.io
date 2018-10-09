import React, { Component } from 'react';
import People from '../../people';

import './travel-master.scss';

class TravelMaster extends Component {
  state = {
    data: [],
    maxPeople: 4
  }
  componentWillMount() {
    this.getData();
  }
  getData = () => {
    fetch('https://5bb29ed877063c0014a7d265.mockapi.io/travel/people', {
      method: 'get',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching dates.'))
    .then(result => {
      console.log(result);
      if (result) this.setState({data: result});
    });
  }
  render() {
    const data = this.state.data,
          maxPeople = this.state.maxPeople;

    return(
      <div className='travel-master'>
        <div className='travel-master__head'>
          <div className='travel-master__head-title text'>Master</div>
        </div>

        { (data.length !== 0) && (data.map((item, i) => <ItemsWrap social={item.social} data={item.items} maxPeople={maxPeople} key={`items-${i}`} />)) }
      </div>
    )
  }
};

const ItemsWrap = ({ social, maxPeople, data }) => (
  <div className='travel-master__items-wrap'>
    {(data.length !== 0) && <People className='travel-master__items' max={maxPeople} data={data} />}

    <a href={social} className='travel-master__items-title text-little' target='_blank'>Join them.</a>
  </div>
);


export default TravelMaster;
