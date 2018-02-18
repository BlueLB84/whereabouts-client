import React from 'react';
// import {connect} from 'react-redux';

import BulletinForm from '../../Forms/BulletinForm/bulletin-form';

import './bulletin-update.css';

export default function BulletinUpdate(props) {
		
	const teamId = props.teamId;
	const userId = props.userId;

	return (
        <div className="bulletin-update">
        	<header>
	            <h3>Pin A New Bulletin</h3>
            </header>
            <BulletinForm teamId={teamId} userId={userId} />
        </div>
	);
	
};