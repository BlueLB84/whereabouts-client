import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <div className="nav">
            <nav>
		      <ul>
		        <li><Link to='/signin-signup'>Sign In | Sign Up</Link></li>
		        <li><Link to='/user/5a934e351a47d05005b1cf3f'>Demo User Landing Page</Link></li>
		      </ul>  
		    </nav>
        </div>
    );
};
