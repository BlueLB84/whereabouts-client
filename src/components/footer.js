import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default function Footer(props) {
    return (
        <div className="footer">
            <footer role="content-info">
				<ul>
					<li>{props.login}</li>
					<li><Link to='/signup'>{props.signup}</Link></li>
					<li>About</li>
					<li><i class="fa fa-github" aria-hidden="true"></i> BlueLB84</li>
				</ul> 
		    </footer>
        </div>
    );
};

Footer.defaultProps = {
	login: '',
	signup: ''
};