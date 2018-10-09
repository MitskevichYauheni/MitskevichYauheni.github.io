import React, { Component } from 'react';
import Location from './../../../base/icons/location2.svg';
import ArrowNext from './../../../base/icons/arrow-next.svg';
import './travel-search.scss';

class TravelSearch extends Component {
  state = {
    value: '',
  }
  changeInput = (event, name) => {
    const val = event.target.value.trim();
    this.setState({value: val});
  }
  render() {
    const value = this.state.value;

    return(
      <form className='travel-search'>
        <input id='travel-search__input'
          className='travel-search__input'
          name='search'
          type='text'
          ref={(input) => this.search = input}
          onChange={(event) => this.changeInput(event)}
          placeholder='Input description'/>

        <label htmlFor='travel-search__input' className='travel-search__label'>
          <Location width='32' height='32' />
        </label>

        <button className='travel-search__btn'>
          <ArrowNext width='32' height='32' />
        </button>
      </form>
    )
  }
};

export default TravelSearch;
