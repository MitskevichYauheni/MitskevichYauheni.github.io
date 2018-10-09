import React, { Component } from "react";
import PropTypes from 'prop-types';

import RefreshSvg from './../../base/icons/refresh.svg';
import './weather.scss';

const propTypes = {
  city: PropTypes.string,
  className: PropTypes.string,
}

class Weather extends Component {
  state = {
    data: {},
  }
  getData() {
    fetch(`https://5bb29ed877063c0014a7d265.mockapi.io/travel/weather?city=${this.props.city}`, {
      method: 'get',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    .then(response => response.ok ? response.json() : console.error('Error while fetching dates.'))
    .then(result => {
      console.log(result);
      if (result) this.setState({data: result[0]});
    });
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    const data = this.state.data,
          className = this.props.className;

    return(
      <div className={'weather' + ((className !== undefined) ? ` ${className}` : '')}>
        { Object.keys(data).length === 0 ?
          <WeatherNotFound /> :
          <WeatherItem img={data.img} t={data.t} />
        }
      </div>
    )
  }
};

const WeatherItem = ({ img, t }) => (
  <div className='weather__item'>
    <div className='weather__icon' style={{backgroundImage: `url(${img})`}} ></div>
    <div className='weather__text text'>{t}°</div>
  </div>
);

const WeatherNotFound = () => (
  <div className='weather__not-found'>
    <RefreshSvg />
  </div>
);

export default Weather;

Weather.propTypes = propTypes;
