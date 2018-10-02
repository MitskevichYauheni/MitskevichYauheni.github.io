import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './travel-city.scss';

class TravelCity extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      baseSize: 3,
      hot: true,
    }
    this.more = this.more.bind(this);
    this.getData = this.getData.bind(this);
  }
  more(event) {
    event.preventDefault();
    const i = this.state.baseSize + 3;
    this.setState({baseSize: i});
  }
  getData() {
    fetch('https://5bb29ed877063c0014a7d265.mockapi.io/travel/city', {
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
  componentWillMount() {
    this.getData();
  }
  render() {
    const data = this.state.data,
          baseSize = this.state.baseSize,
          hot = this.state.hot;
    let items = [];

    data.forEach((item, i) => {
      if (i < baseSize) items.push(<Item image={item.image} city={item.city} href={item.href} i={i} key={`city-${i}`}/>);
    });

    return(
      <div className='travel-city'>
        <div className='travel-city__head'>
          <div className='travel-city__head-left'>
            <div className='travel-city__head-title text'>City</div>
            {(hot) && <div className='travel-city__head-label'><span>Hot</span></div>}
          </div>

          {(baseSize < data.length) && <a className='travel-city__more text-little' onClick={this.more}>More</a>}
        </div>

        {(data.length !== 0) && (
          <div className='travel-city__items'>{items}</div>
        )}
      </div>
    )
  }
};

const Item = ({ image, city, href, i }) => (
  <Link className='travel-city__item' to={href} style={{backgroundImage: `url(${image})`}}>
    <p className='travel-city__item-name text-little'><span>{city}</span></p>
  </Link>
);

export default TravelCity;
