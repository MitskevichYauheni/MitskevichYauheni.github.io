import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Select from '../../select';
import Weather from '../../weather';

import SearchSvgTag from '../../../base/icons/search-1.svg';
import './loc-head.scss';

class LocHead extends Component {
  render() {
    const { city, select, tags } = this.props.data;

    return(
      <div className='loc-head'>
        <div className='loc-head__top'>
          {((select !== undefined) && <Select className='loc-head__select' data={select} />)}
          {((select === undefined) && <div className='loc-head__title h2'>I am in {city}.</div>)}
          <Weather className='loc-head__weather' city={city} />

        </div>
        {((tags !== undefined) && <Tags data={tags} />)}
      </div>
    )
  }
};

const Tags = ({ data }) => (
  <div className='loc-head__tags'>
    { data.map((item, i) => (
      <Link
        className='loc-head__tag text-little'
        to={item.href}
        key={`tag-${i}`}
      >
        {(i === 0) && <SearchSvgTag />}
        {item.text}
      </Link>
    ))}
  </div>
);

export default LocHead;

LocHead.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string,
    select: PropTypes.array,
    tags: PropTypes.array,
  })
}
