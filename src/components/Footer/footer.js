import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <footer>
				<ul>
			        <li><Link to='/signin-signup'>Sign In | Sign Up</Link></li>
			        <li>About</li>
				</ul> 
		    </footer>
        </div>
    );
};