import React from 'react';

import SubtitleCard from '../../Headers/SubtitleCard/subtitle-card';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { auth } from '../../../firebase';

import './signup-form.css';

export default class SignupForm extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    user: null
	    }
	}

	addUserFirebase = (currentUser) => {
		const userRef = firebase.database().ref('users');
		const user = {
			uid: currentUser.uid,
			email: currentUser.email,
			displayName: currentUser.displayName
		}
		const userKey = userRef.push(user).key;
		console.log(currentUser);
		console.log(currentUser.uid);
		auth.currentUser.getIdToken(true).then(function(idToken) {
			console.log(idToken);
			// Send token to your backend via HTTPS
			// ...
		});
	}

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

	componentWillMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
				this.addUserFirebase(this.state.user)
			} 
		});
	}


   render() {

		if (!this.state.user) {
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
	        	<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
	        	<p onClick={() => {firebase.auth().signOut(); this.setState({ user: null });}}>Sign-out</p>
	        </section>
			</div>
		)
	}
};