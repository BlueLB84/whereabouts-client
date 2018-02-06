import React from 'react';

import './user-whereabouts-status.css';

export default function UserWhereaboutsStatus(props) {
    return (
    	<div className="user-whereabouts-status">
            <ul>
        		<li><em>[Date/Time]</em></li>
        		<li>Where: {props.location}</li>
        		<li>What: {props.activity}</li>
        	</ul>
        </div>
    );
};

UserWhereaboutsStatus.defaultProps = {
    location: 'Some Location',
    activity: 'Some Activity'
};