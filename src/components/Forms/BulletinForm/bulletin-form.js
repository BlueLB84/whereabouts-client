import React from 'react';

import './bulletin-form.css';

export default class BulletinForm extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const text = this.textInput.value.trim();
		if (text && this.props.addBulletin) {
			this.props.addBulletin(this.textInput.value);
		}
		this.textInput.value = '';
	}


	render() {
		
		return (
	        <form className="bulletin-form" onSubmit={this.onSubmit}>
	            
				<label for="update-bulletin">Bulletin</label>
				<input placeholder="Your bulletin message" type="text" ref={input => this.textInput = input} />
	            
	            <button>Pin It!</button>
	            <button type="button">Cancel</button>
	        </form>
    	);
	} 
}