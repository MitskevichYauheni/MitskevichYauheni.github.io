import React, { Component } from "react";
import PropTypes from 'prop-types';
import './select.scss';

class Select extends Component {
  constructor(){
    super();
    this.state = {
      selectedItem: '',
    }
    this.eventOpen = this.eventOpen.bind(this);
    this.eventChange = this.eventChange.bind(this);
  }
  eventOpen() {
    this.select.classList.toggle('select--open');
  }
  eventChange(item) {
    this.select.classList.remove('select--open');
    this.setState({selectedItem: item});
  }
  componentWillMount() {
    this.setState({selectedItem: this.props.data[0]});
  }
  render() {
    const selectedItem = this.state.selectedItem.text,
          data = this.props.data,
          className = this.props.className;

    return(
      <div
        className={'select' + ((className !== undefined) ? ` ${className}` : '')}
        ref={(select) => this.select = select}
      >
        <div className='select__btn h2' onClick={() => this.eventOpen()}>{selectedItem}</div>
        <SelectItems data={data} eventChange={this.eventChange} />
      </div>
    )
  }
};

const SelectItems = ({ data, eventChange }) => (
  <div className='select__list-wrap'>
    { data.map((item, i) => <div className='select__list-item text' onClick={() => eventChange(item)} key={`tag-${i}`}>{item.text}</div> )}
  </div>
);

Select.propTypes = {
  max: PropTypes.number,
  data: PropTypes.array,
  className: PropTypes.string,
}

export default Select;
