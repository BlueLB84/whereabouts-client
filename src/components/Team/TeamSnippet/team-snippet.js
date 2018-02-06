import React from 'react';

import './team-snippet.css';

export default function TeamSnippet(props) {
	return (
	    <div className="team-snippet" index={props.teamId} onClick={props.onClick}>
	    	<img src={props.imgSrc} alt={props.imgAlt} />
	    	<h4>{props.name}</h4>
	    	<p>{props.motto}</p>
	    </div>
	);
}

TeamSnippet.defaultProps = {
    name: 'Team Awesome',
    motto: 'Get your own motto!',
    imgAlt: 'a picture of a dog',
};