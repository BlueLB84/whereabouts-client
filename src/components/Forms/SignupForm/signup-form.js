import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { connect } from 'react-redux';

import SubtitleCard from '../../Headers/SubtitleCard/subtitle-card';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { auth } from '../../../firebase';

import { checkUserExists, logoutUser } from '../../../actions';

import './signup-form.css';

export class SignupForm extends React.Component {

	uiConfig = {
		signInFlow: 'popup',
		signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.GithubAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccess: () => false
		}
	};

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.checkUserExists(user.uid);
			} 
		});
	}

	checkUserExists(userUID) {
		this.props.dispatch(checkUserExists(userUID));
	}

	logoutUser() {
		this.props.dispatch(logoutUser());
	}

	render() {
		
		if (!this.props.currentUser) {
			return (
	        <div>
	        	<header role="banner">
	            	<SubtitleCard />
	            </header>
		        <section className="signup-form">
			        <h3>Sign In to Whereabouts!</h3>
			        <p>Not on Whereabouts yet? Sign In with Google or GitHub credentials and we'll get you started:</p>
			        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
		      	</section>
	        </div>
    	);
		}
		return (
			<div>
				<header role="banner">
            	<SubtitleCard />
	        </header>
	        <section>
	        	<h3>Welcome {this.props.currentUser.usrname}</h3>
	        	<Link to={`/user/${this.props.currentUser.userId}`}>Go To Your User Homepage</Link>
	        	<p onClick={() => {firebase.auth().signOut(); this.logoutUser();}}>Sign-out</p>
	        </section>
			</div>
			)
			 
			
		
	}
};

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(SignupForm);