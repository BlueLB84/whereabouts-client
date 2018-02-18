import React from 'react';

import './team-snippet.css';

export default function TeamSnippet(props) {
	console.log(props);
	return (
	    <div className="team-snippet" index={props.teamId} onClick={props.onClick}>
	    	<div className="team-snippet--hover">
		    	<img className="team-img" src={props.imgSrc} alt={props.imgAlt} />
		    	<h4>{props.name}</h4>
	    	</div>
	    	<p>{props.motto}</p>
	    </div>
	);
}

TeamSnippet.defaultProps = {
    name: 'Team Awesome',
    motto: 'Get your own motto!',
    imgAlt: 'a picture of a dog',
};