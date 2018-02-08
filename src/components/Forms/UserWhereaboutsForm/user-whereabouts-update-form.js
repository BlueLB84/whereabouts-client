import React from 'react';

import './user-whereabouts-update-form.css';

export default class UserWhereaboutsForm extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const location = this.locationInput.value.trim();
		const activity = this.activityInput.value.trim();
		if (location && activity && this.props.addWhereabouts) {
			this.props.addWhereabouts(this.locationInput.value, this.activityInput.value);
		}
		this.locationInput.value = '';
		this.activityInput.value = '';
	}


	render() {
		
		return (
	        <form className='user-whereabouts-update-form' onSubmit={this.onSubmit}>
	            
	        	<label htmlFor="user-location">Location</label>
	            <input placeholder='Your new location' type="text" ref={input => this.locationInput = input} />

				<label htmlFor="user-activity">Activity</label>
	            <input placeholder='Your new activity' type="text" ref={input => this.activityInput = input} />
	            
	            <button>Update Your Whereabouts</button>
	            <button type='button'>Cancel</button>
	        </form>
    	);
	} 
}