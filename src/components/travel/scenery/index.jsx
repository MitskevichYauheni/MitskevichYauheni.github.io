import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import People from '../../people';

import SearchSvg from './../../../base/icons/search.svg';
import './travel-scenery.scss';

class TravelScenery extends Component {
  state = {
    data: [],
    baseSize: 4,
    updated: true
  }
  componentWillMount() {
    this.getData();
  }
  more = (event) => {
    event.preventDefault();
    const i = this.state.baseSize + 2;
    this.setState({baseSize: i});

    setTimeout(() => {
      if (this.swiper) this.swiper.update();
    }, 10);
  }
  getData = () => {
    fetch('https://5bb29ed877063c0014a7d265.mockapi.io/travel/scenery', {
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
          baseSize = this.state.baseSize,
          updated = this.state.updated;

    const params = {
      slidesPerView: 1,
      spead: 700,
      loop: false,
      spaceBetween: 12,
      containerClass: 'travel-scenery__slider swiper-container'
    };
    let slides = [];

    data.forEach((item, i) => {
      if (i < baseSize) slides.push(<Slide image={item.image} date={item.date} title={item.title} href={item.href} people={item.people} key={`slide-${i}`}/>);
    });

    return(
      <div className='travel-scenery'>
        <div className='travel-scenery__head'>
          <div className='travel-scenery__head-left'>
            <div className='travel-scenery__head-title text'>Daily Scenery</div>
            {(updated) && <div className='travel-scenery__head-label text-little'>Updated</div>}
          </div>

          {(baseSize < data.length) && <a className='travel-scenery__more text-little' onClick={this.more}>More</a>}
        </div>

        {data.length === 0 ?
          <SliderTreatment /> :
          <Swiper {...params} ref={(node) => { if (node) this.swiper = node.swiper }}>
            {slides}
          </Swiper>
        }
      </div>
    )
  }
};


const Slide = ({ image, date, title, href, people }) => (
  <div className='travel-scenery__slide swiper-slide'>
    <div className='travel-scenery__slide-img' style={{backgroundImage: `url(${image})`}}></div>
    <div className='travel-scenery__slide-about'>
      <div className='travel-scenery__slide-description'>
        <p className='travel-scenery__slide-date text-little'>{date}</p>
        <Link className='travel-scenery__slide-title text' to={href}>{title}</Link>
      </div>
      <People className='travel-scenery__slide-people' max={2} data={people}/>
    </div>
  </div>
);

const SliderTreatment = () => (
  <div className='travel-scenery__treatment'>
    <SearchSvg />
    <p className='travel-scenery__treatment-text text'>Request processing in progress.</p>
  </div>
);

export default TravelScenery;
