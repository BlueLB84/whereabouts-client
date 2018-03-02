import React from 'react';

import { connect } from 'react-redux';

import { addWhereaboutsAxios } from '../../../actions';

import './user-whereabouts-update-form.css';

export class UserWhereaboutsForm extends React.Component {

	onSubmit = event => {
		event.preventDefault();
		const location = this.locationInput.value.trim();
		const activity = this.activityInput.value.trim();
		if (location && activity && this.props.userId !== undefined) {
			this.addWhereaboutsAxios(this.locationInput.value, this.activityInput.value, this.props.userId);
		}
		this.locationInput.value = '';
		this.activityInput.value = '';
	}

	addWhereaboutsAxios(location, activity, userId) {
		this.props.dispatch(addWhereaboutsAxios(location, activity, userId));
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

export default connect()(UserWhereaboutsForm);
