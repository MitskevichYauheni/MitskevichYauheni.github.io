import React, { Component } from 'react';
import {IMaskInput} from 'react-imask';

import SearchSvg from './../../base/icons/search.svg';
import DownloadSvg from './../../base/icons/download.svg';
import './profile.scss';

class Profile extends Component {
  state = {
    data: {},
  }
  getData = () => {
    fetch('http://5bbb9ce8828fb30013ef6fe9.mockapi.io/travel/profile', {
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
  changeFileAvatar = (event) => {
    const file = this.inputAvatar.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.avatar.style.backgroundImage = `url(${reader.result})`;
    }

    (file) && reader.readAsDataURL(file);
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    const data = this.state.data;

    return(
      <div className='profile'>
        {(Object.keys(data).length === 0) && <ProfileNotFound />}
        {(Object.keys(data).length !== 0) && (
          <div className='profile__content main'>
            {(data.avatar) && (
              <div className='profile__avatar-wrap'>
                <div className='profile__avatar'
                  style={{backgroundImage: `url(${data.avatar})`}}
                  ref={(div) => this.avatar = div}
                />

                <label className='profile__avatar-file text-little'>
                  <DownloadSvg />
                  <span>upload avatar</span>
                  <input className='profile__avatar-input'
                    type='file'
                    ref={(input) => this.inputAvatar = input}
                    onChange={(event) => this.changeFileAvatar(event)}
                    accept='image/png, image/jpeg'
                  />
                </label>
              </div>
            )}

            <div className='profile__description'>
              {data.name && <ProfileInputWrap title='Name:' value={data.name} placeholder='Enter your name'/>}
              {data.email && <ProfileInputWrap title='Email:' value={data.email} placeholder='Enter your email'/>}
              {data.address && <ProfileInputWrap title='Address:' value={data.address} placeholder='Enter your address'/>}
              {data.phone && <ProfileInputWrap title='Phone:' mask='+{375} (00) 000-00-00' value={data.phone} placeholder='Enter your phone' />}
            </div>

            <button className='profile__btn'>
              <span>Save</span>
            </button>
          </div>
        )}
      </div>
    )
  }
};

const ProfileInputWrap = ({ title, mask, value, placeholder }) => (
  <div className='profile__input-wrap'>
    <p className='profile__input-name text-little'>{title}</p>
    {mask ?
      <IMaskInput className='profile__input' type='text' mask={mask} value={value} placeholder={placeholder} /> :
      <input className='profile__input' type='text' defaultValue={value} placeholder={placeholder} />
    }
  </div>
);

const ProfileNotFound = () => (
  <div className='profile__content main'>
    <div className='profile__not-found'>
      <SearchSvg />
      <p className='profile__not-found-text text'>Nothing found.</p>
      <p className='profile__not-found-text text'>Request is being processed.</p>
    </div>
  </div>
);

export default Profile;
