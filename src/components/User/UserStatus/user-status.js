import React from 'react';

import './user-status.css';

export default function UserStatus(props) {
    return (
        <div className="user-status">
        	<div className="usr-pic">
	        	<img src={props.imgSrc} alt="user icon"></img>
	        	<p>{props.usrname}</p>
        	</div>
        	<ul>
        		<li><em>[Date/Time]</em></li>
        		<li>Where: {props.location}</li>
        		<li>What: {props.activity}</li>
        	</ul>
        	<button type="button">Update Your Whereabouts</button>
        </div>
    );
};

UserStatus.defaultProps = {

};