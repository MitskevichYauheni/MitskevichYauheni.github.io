import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './people.scss';

class People extends Component {
  render() {
    const data = this.props.data,
          max = this.props.max || 10,
          className = this.props.className;

    return(
      <div className={'people' + ((className !== undefined) ? ` ${className}` : '')}>
        { data.map((item, i) => (i < max) && <Link className='people__item' key={`people-${i}`} to={item.href} style={{backgroundImage: `url(${item.avatar})`}} ></Link> )}
      </div>
    )
  }
};

People.propTypes = {
  max: PropTypes.number,
  data: PropTypes.array,
  className: PropTypes.string,
}

export default People;
