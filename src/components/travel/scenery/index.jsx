import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import Search from './../../../base/icons/search.svg';
import './travel-scenery.scss';

class TravelScenery extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      baseSize: 4,
      updated: true
    }
    this.more = this.more.bind(this);
    this.getData = this.getData.bind(this);
    this.swiper = null;
  }
  more(event) {
    event.preventDefault();
    const i = this.state.baseSize + 2;
    this.setState({baseSize: i});

    setTimeout(() => {
      if (this.swiper) this.swiper.update();
    }, 10);
  }
  getData() {
    fetch('https://5bb29ed877063c0014a7d265.mockapi.io/travel/scenery', {
      method: 'get',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching dates.'))
    .then(result => {
      console.log(result);
      result && this.setState({data: result});
    });
  }
  componentWillMount() {
    this.getData();
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

        {(data.length === 0) && <SliderTreatment />}

        {(data.length !== 0) && (
          <Swiper {...params} ref={(node) => { if(node) this.swiper = node.swiper }}>
            {slides}
          </Swiper>
        )}
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
      <div className='travel-scenery__slide-people'>
        { people.map((item, i) => <Link className='travel-scenery__slide-people-item' key={`people-${i}`} to={item.href} style={{backgroundImage: `url(${item.avatar})`}} ></Link> )}
      </div>
    </div>
  </div>
);

const SliderTreatment = () => (
  <div className='travel-scenery__treatment'>
    <Search />
    <p className='travel-scenery__treatment-text text'>Request processing in progress.</p>
  </div>
);

export default TravelScenery;
