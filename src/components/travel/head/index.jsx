import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
}

const defaultProps = {
  name: '',
}

class TravelHead extends Component {
  render() {
    const name = this.props.name;

    return(
      <div className='travel__head'>
        <p className='travel__text h2'>Hi {name},</p>
        <p className='travel__text h2'>Where do you want to go?</p>
      </div>
    )
  }
};

TravelHead.propTypes = propTypes;
TravelHead.defaultProps = defaultProps;

export default TravelHead;
