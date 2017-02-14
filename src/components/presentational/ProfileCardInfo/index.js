import React, { Component } from 'react';
import { Sticky } from 'react-sticky';

import ProfileAvatar from '../../presentational/ProfileAvatar';

import './index.css';

export default class ProfileCardInfo extends Component {

  render() {

    return (
    	<Sticky className="user-card">
    		<ProfileAvatar className="user-card__profile-picture" />
	        <h2>
		        <div className="user-card__name">Davy Bolivar</div>
		        <div className="user-card__role">Developer</div>
	        </h2>
    	</Sticky>
    )
  }
}