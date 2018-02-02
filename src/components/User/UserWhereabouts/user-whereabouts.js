import React from 'react';

import './user-whereabouts.css';

export default function UserWhereabouts(props) {
    return (
        <div className="user-whereabouts-container">
        	<div className="user-img">
	        	<img src={props.imgSrc} alt="user icon"></img>
	        	<p>{props.usrname}</p>
        	</div>
        	<div className="user-whereabouts">
                <ul>
            		<li><em>[Date/Time]</em></li>
            		<li>Where: {props.location}</li>
            		<li>What: {props.activity}</li>
            	</ul>
            </div>
        </div>
    );
};

UserWhereabouts.defaultProps = {
    imgSrc: 'https://goo.gl/images/7KePvS',
    usrname: 'Yoothee Yuser',
    location: 'Some Location',
    activity: 'Some Activity'
};