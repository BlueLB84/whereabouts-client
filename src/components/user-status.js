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
        		<li>Where: {props.location}</li>
        		<li>What: {props.activity}</li>
        	</ul>
        </div>
    );
};

UserStatus.defaultProps = {

};