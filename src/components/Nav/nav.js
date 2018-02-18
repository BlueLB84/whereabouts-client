import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <div className="nav">
            <nav>
		      <ul>
		        <li><Link to='/signin-signup'>Sign In | Sign Up</Link></li>
		        <li><Link to='/user/0'>Demo User Landing Page</Link></li>
		      </ul>  
		    </nav>
        </div>
    );
};
