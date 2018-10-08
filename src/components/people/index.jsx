import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './people.scss';

const propTypes = {
  max: PropTypes.number,
  data: PropTypes.array,
  className: PropTypes.string,
}

const defaultProps = {
  max: 10,
}

class People extends Component {
  render() {
    const { data, className, max } = this.props;

    return(
      <div className={'people' + ((className !== undefined) ? ` ${className}` : '')}>
        { data.map((item, i) => (i < max) && <Link className='people__item' key={`people-${i}`} to={item.href} style={{backgroundImage: `url(${item.avatar})`}} ></Link> )}
      </div>
    )
  }
};

People.propTypes = propTypes;
People.defaultProps = defaultProps;

export default People;
