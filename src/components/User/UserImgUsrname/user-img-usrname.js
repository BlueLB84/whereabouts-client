import React from 'react';

import './user-img-usrname.css';

export default function UserImgUsrname(props) {
    return (
    	<div className="user-img">
			<img src={props.imgSrc} alt="user icon" />
			<p>{props.usrname}</p>
		</div>
    );
};

UserImgUsrname.defaultProps = {
    imgSrc: 'https://picsum.photos/150',
    usrname: 'Yoothee Yuser'
};