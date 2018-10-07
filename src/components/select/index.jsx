import React, { Component } from "react";
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './select.scss';

class Select extends Component {
  constructor(){
    super();
    this.state = {
      selectedItem: '',
    }
    this.bodyClick = this.bodyClick.bind(this);
    this.eventOpen = this.eventOpen.bind(this);
    this.eventChange = this.eventChange.bind(this);
  }
  bodyClick(e) {
    const target = e.target || e.srcElement;

    if (this.select.classList.contains('select--open') && target !== this.select.querySelector('.select__btn')) {
      this.select.classList.remove('select--open');
    }
  }
  eventOpen() {
    if (this.select.classList.contains('select--open')) {
      this.select.classList.remove('select--open');
    } else {
      this.select.classList.add('select--open');
      this._scrollBarRef.updateScroll();
    }
  }
  eventChange(item) {
    this.select.classList.remove('select--open');
    this.setState({selectedItem: item});
  }
  componentWillMount() {
    this.setState({selectedItem: this.props.data[0]});
  }
  componentDidMount() {
    document.body.addEventListener('click', this.bodyClick);
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.bodyClick);
  }
  render() {
    const selectedItem = this.state.selectedItem.text,
          data = this.props.data,
          className = this.props.className;

    return(
      <div className={'select' + ((className !== undefined) ? ` ${className}` : '')}
        ref={(select) => this.select = select} >
        <div className='select__btn h2' onClick={() => this.eventOpen()}>{selectedItem}</div>
        <PerfectScrollbar
          className='select__list-wrap'
          ref = {(ref) => { this._scrollBarRef = ref; }} >
          { data.map((item, i) => <div className='select__list-item text' onClick={() => this.eventChange(item)} key={`tag-${i}`}>{item.text}</div> )}
        </PerfectScrollbar>
      </div>
    )
  }
};

Select.propTypes = {
  max: PropTypes.number,
  data: PropTypes.array,
  className: PropTypes.string,
}

export default Select;
