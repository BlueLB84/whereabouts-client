import React from 'react';

import './nav.css';

export default function Nav(props) {
    return (
        <div className="nav">
            <nav role="navigation">
		      <ul>
		        <li>{props.login}</li>
		        <li>{props.signup}</li>
		      </ul>  
		    </nav>
        </div>
    );
};

Nav.defaultProps = {
	login: '',
	signup: ''
};