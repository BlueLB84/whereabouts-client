import React from 'react';

import UserWhereaboutsForm from '../../Forms/UserWhereaboutsForm/user-whereabouts-update-form';

import './user-whereabouts-update.css';

export default function UserWhereaboutsUpdate(props) {
	
	const userId = props.userId;

	return (
        <div className="user-whereabouts-update">
        	<header>
	            <h3>Update Your Whereabouts</h3>
            </header>
            <UserWhereaboutsForm userId={userId} />
        </div>
	);
};

