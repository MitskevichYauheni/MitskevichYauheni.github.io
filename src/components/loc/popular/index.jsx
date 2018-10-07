import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './loc-popular.scss';

class LocPopular extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      baseSize: 1,
    }
    this.more = this.more.bind(this);
  }
  more(event) {
    event.preventDefault();
    const i = this.state.baseSize + 1;
    this.setState({baseSize: i});
  }
  render() {
    const data = this.props.data,
          baseSize = this.state.baseSize,
          items = [];

    data.forEach((item, i) => {
      if (i < baseSize) items.push(
        <Item
          image={item.image}
          name={item.name}
          text={item.text}
          price={item.price}
          distance={item.distance}
          detail={item.detail}
          nav={item.nav}
          key={`popular-${i}`}
        />
      );
    });

    return(
      <div className='loc-popular'>
        <div className='loc-popular__head'>
          <div className='loc-popular__head-title text'>Popular</div>

          {(baseSize < data.length) && <a className='loc-popular__more text-little' onClick={this.more}>More</a>}
        </div>
        <div className='loc-popular__items'>{items}</div>
      </div>
    )
  }
};

const Item = ({ image, name, text, price, distance, detail, nav }) => (
  <div className='loc-popular__item'>
    <div className='loc-popular__item-head'>
      <div className='loc-popular__item-img' style={{backgroundImage: `url(${image})`}}></div>

      <div className='loc-popular__item-description'>
        <p className='loc-popular__item-name text'>{name}</p>
        <p className='loc-popular__item-text text-little'>{text}</p>
        <div className='loc-popular__item-info'>
          <p className='loc-popular__item-price h2'>{price}</p>
          <p className='loc-popular__item-distance text-little'>{distance}</p>
        </div>
      </div>
    </div>

    <div className='loc-popular__item-links'>
      { (detail) && <Link to={detail} className='loc-popular__item-link text'><span>Details</span></Link>}
      { (nav) && <Link to={nav} className='loc-popular__item-link text'><span>Navigation</span></Link>}
    </div>
  </div>
);

export default LocPopular;

LocPopular.propTypes = {
  data: PropTypes.array
}
