import React from 'react';

import './team-snippet.css';

export default function TeamSnippet(props) {
    return (
        <div className="team-snippet">
        	<img src=`${props.imgSrc}` alt=`${props.imgAlt}`></img>
        	<h4>{props.teamName}</h4>
        </div>
    );
};

TeamSnippet.defaultProps = {
    teamName: 'Team Awesome',
    iconSrc: '../../public/images/team_zoe.jpg'
};