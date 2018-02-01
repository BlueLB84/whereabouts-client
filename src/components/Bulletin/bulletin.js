import React from 'react';
import {Link} from 'react-router-dom';

import './bulletin.css';

export default function Bulletin(props) {
    return (
        <div className="bulletin-board">
        	<header>
          		<h3>Team Bulletins:</h3>
        	</header>
	        <ul>
	          <li className="bulletin-post">{props.bulletinPost} <em>[Date/Time]</em></li>
	        </ul>
            <button type="button">Post A New Bulletin</button>
        </div>
    );
};

Bulletin.defaultProps = {

};