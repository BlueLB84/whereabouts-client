import React from 'react';
import { connect } from 'react-redux';

import './bulletin-post.css';

export class BulletinPost extends React.Component {
    
    render() {
        let username;

        this.props.users.map((user, index) => {
            if (user.userId === this.props.userId) {
                username = user.usrname;
            }
            return false;
        });
    	
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

const mapStateToProps = (state, props) => ({
    teams: state.teams,
    users: state.users
});

export default connect(mapStateToProps)(BulletinPost);