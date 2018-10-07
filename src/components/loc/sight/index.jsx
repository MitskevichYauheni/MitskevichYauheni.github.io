import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './loc-sight.scss';

class LocSight extends Component {
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

    data.forEach((el, i) => {
      if (i < baseSize) items.push(
        <Item data={el.items} key={`sight-${i}`} />
      );
    });

    return(
      <div className='loc-sight'>
        <div className='loc-sight__head'>
          <div className='loc-sight__head-title text'>Must go</div>

          {(baseSize < data.length) && <a className='loc-sight__more text-little' onClick={this.more}>More</a>}
        </div>
        <div className='loc-sight__items'>{items}</div>
      </div>
    )
  }
};

const Item = ({ data }) => (
  <div className='loc-sight__item'>
      {(data[0] !== undefined) && <Link
        to={data[0].href}
        className='loc-sight__main-img'
        style={{backgroundImage: `url(${data[0].img})`}}
      ></Link>}
      <div className='loc-sight__col'>
       {(data[1] !== undefined) &&
         (<Link to={data[1].href} className='loc-sight__img' style={{backgroundImage: `url(${data[1].img})`}}></Link>)
       }
       {(data[2] !== undefined) &&
         (<Link to={data[2].href} className='loc-sight__img' style={{backgroundImage: `url(${data[2].img})`}}></Link>)
       }
       <Link to={data[2].href} className='loc-sight__img loc-sight__img--sum'>
         <span className='h2'>{data.length}+</span>
       </Link>
      </div>
  </div>
);

export default LocSight;

LocSight.propTypes = {
  data: PropTypes.array
}
