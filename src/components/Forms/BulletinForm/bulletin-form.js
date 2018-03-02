import React from 'react';

import { connect } from 'react-redux';

import { addBulletinAxios } from '../../../actions';

import './bulletin-form.css';

export class BulletinForm extends React.Component {
	

	onSubmit = event => {
		event.preventDefault();
		const text = this.textInput.value.trim();
		if (text && this.props.teamId !== undefined && this.props.userId !== undefined) {
			this.addBulletinAxios(this.textInput.value, this.props.teamId, this.props.userId);
		}

		this.textInput.value = '';
	}
	
	addBulletinAxios(text, teamId, userId) {
		this.props.dispatch(addBulletinAxios(text, teamId, userId));
	}

	render() {
		return (
	        <form className="bulletin-form" onSubmit={this.onSubmit}>
	            
				<label htmlFor="update-bulletin">Bulletin</label>
				<input placeholder="Your bulletin message" type="text" ref={input => this.textInput = input} />
	            
	            <button>Pin It!</button>
	            <button type="reset">Cancel</button>
	        </form>
    	);
	} 
}

export default connect()(BulletinForm);