import React from 'react';

import UserWhereaboutsStatus from './../UserWhereaboutsStatus/user-whereabouts-status';
import UserImgUsrname from './../UserImgUsrname/user-img-usrname';

import './user-whereabouts.css';

export default function UserWhereabouts(props) {
    return (
    	<div>
            <UserImgUsrname imgSrc={props.imgSrc} usrname={props.usrname} />
            <UserWhereaboutsStatus  location={props.whereabouts.location} activity={props.whereabouts.activity} />
        </div>
    );
};
