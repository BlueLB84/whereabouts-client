import React from 'react';
import {connect} from 'react-redux';

import {addBulletin} from '../../../actions';

import './bulletin-form.css';

export class BulletinForm extends React.Component {
	
	onSubmit = event => {
		event.preventDefault();
		const text = this.textInput.value.trim();
		if (text && this.props.team !== undefined) {
			this.addBulletin(this.textInput.value, this.props.team);
		}
		this.textInput.value = '';
	}
	
	addBulletin(text, team) {
		console.log('action dispatched');
		this.props.dispatch(addBulletin(text, team));
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