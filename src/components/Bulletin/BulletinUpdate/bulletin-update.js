import React from 'react';
import {connect} from 'react-redux';

import BulletinForm from '../../Forms/BulletinForm/bulletin-form';

import {addBulletin} from '../../../actions';

import './bulletin-update.css';

export class BulletinUpdate extends React.Component {
	addBulletin(text) {
		this.props.dispatch(addBulletin(text, this.props.bulletinIndex));
	}

	render() {
		return (
	        <div className="bulletin-update">
	        	<header>
		            <h3>Pin A New Bulletin</h3>
	            </header>
	            <BulletinForm addBulletin={text => this.addBulletin(text)}/>
	        </div>
		);
	}
};

export default connect()(BulletinUpdate);
