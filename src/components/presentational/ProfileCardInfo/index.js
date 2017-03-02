import React, { Component } from 'react';
import classnames from 'classnames';
import { Sticky, StickyContainer } from 'react-sticky';

import ProfileAvatar from '../../presentational/ProfileAvatar';

import './index.css';

export default class ProfileCardInfo extends Component {

  render() {
  	const infoList = this.props.info;

    const emailElement = (!infoList.email)?null:
      <li className="user-card__info-elem">
      	<svg className="user-card__info-icon" viewBox="0 0 24 24">
			<path fill="inherit" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
		</svg>
      	{infoList.email}
      </li>;

    const mobileElement = (!infoList.email)?null:
      <li className="user-card__info-elem">
      	<svg className="user-card__info-icon" viewBox="0 0 24 24">
			<path fill="inherit" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
		</svg>
      	{infoList.mobile}
      </li>;

    const birthdayElement = (!infoList.birthday)?null:
      <li className="user-card__info-elem">
      	<svg className="user-card__info-icon" viewBox="0 0 24 24">
			<path fill="inherit" d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" />
		</svg>
      	{infoList.birthday}
      </li>;

    const startWorkElement = (!infoList.startwork)?null:
      <li className="user-card__info-elem">
      	<svg className="user-card__info-icon" viewBox="0 0 24 24">
			<path fill="inherit" d="M14,6H10V4H14M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z" />
		</svg>
      	{infoList.startwork}
      </li>;

    const locationElement = (!infoList.location)?null:
      <li className="user-card__info-elem">
      	<svg className="user-card__info-icon" viewBox="0 0 24 24">
		    <path fill="inherit" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
		</svg>
      	{infoList.location}
      </li>;

    return (
    	<StickyContainer className={classnames('user-card', this.props.className)}>
    		<Sticky 
          className="user-card__sticky-container"
          isActive={this.props.isActive}>
	    		<ProfileAvatar className="user-card__user-avatar" src="http://i.imgur.com/BgC2FVK.png" />
		        <h2>
			        <div className="user-card__name">{this.props.params.id}</div>
			        <div className="user-card__role">developer</div>
		        </h2>
            <button className="user-card__button button">Clock-in</button>
		        <ul className="user-card__info-list">
          			{emailElement}
          			{mobileElement}
          			{birthdayElement}
          			{startWorkElement}
          			{locationElement}
        		</ul>
	        </Sticky>
    	</StickyContainer>
    )
  }
}