import React from 'react';
import firebase from '../../../firebase';
import './user-whereabouts-update-form.css';

export default class UserWhereaboutsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			whereabouts: []
		}
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const location = this.locationInput.value.trim();
		const activity = this.activityInput.value.trim();
		if (location && activity && this.props.addWhereabouts) {
			this.props.addWhereabouts(this.locationInput.value, this.activityInput.value);
			this.addWhereaboutsFirebase(this.locationInput.value, this.activityInput.value);
		}
		this.locationInput.value = '';
		this.activityInput.value = '';
	}

	addWhereaboutsFirebase(location, activity) {
		const whereaboutsRef = firebase.database().ref('whereabouts');
		const whereabout = {
			location,
			activity,
			userId: 0
		}
		whereaboutsRef.push(whereabout);
	}

	componentDidMount() {
		const whereaboutsRef = firebase.database().ref('whereabouts');
		whereaboutsRef.on('value', (snapshot) => {
			let whereabouts = snapshot.val();
			let newState = [];
			for (let whereabout in whereabouts) {
				newState.push({
					location: whereabouts[whereabout].location,
					activity: whereabouts[whereabout].activity,
					userId: whereabouts[whereabout].userId
				});
			}
			this.setState({
				whereabouts: newState
			});
			console.log(this.state.whereabouts);
		});
	}

	render() {
		
		return (
	        <form className='user-whereabouts-update-form' onSubmit={this.onSubmit}>
	            
	        	<label htmlFor="user-location">Location</label>
	            <input placeholder='Your new location' type="text" ref={input => this.locationInput = input} />

				<label htmlFor="user-activity">Activity</label>
	            <input placeholder='Your new activity' type="text" ref={input => this.activityInput = input} />
	            
	            <button>Update Your Whereabouts</button>
	            <button type='reset'>Cancel</button>
	        </form>
    	);
	} 
}