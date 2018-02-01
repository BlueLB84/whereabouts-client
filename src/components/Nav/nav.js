import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav(props) {
    return (
        <div className="nav">
            <nav>
		      <ul>
		        <li>{props.login}</li>
		        <li><Link to='/signup'>{props.signup}</Link></li>
		      </ul>  
		    </nav>
        </div>
    );
};

Nav.defaultProps = {
	login: '',
	signup: ''
};