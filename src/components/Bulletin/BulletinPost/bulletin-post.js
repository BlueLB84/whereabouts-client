import React from 'react';
import {connect} from 'react-redux';

import './bulletin-post.css';

export class BulletinPost extends React.Component {
    
    render() {

		const username = this.props.users[this.props.user].usrname;
    	
    	return (
	        <div className="bulletin-post">
	            <p>{this.props.text} [{username}]</p>
	        </div>
    	);
    }
    
};

BulletinPost.defaultProps = {
    text: ''
};

const mapStateToProps = state => ({
    bulletins: state.bulletins,
    users: state.users
});

export default connect(mapStateToProps)(BulletinPost);