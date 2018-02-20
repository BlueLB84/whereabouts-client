import React from 'react';
import { connect } from 'react-redux';

import UserWhereaboutsForm from '../../Forms/UserWhereaboutsForm/user-whereabouts-update-form';

import { addWhereabouts } from '../../../actions';

import './user-whereabouts-update.css';

export class UserWhereaboutsUpdate extends React.Component {
	

	addWhereabouts(location, activity, userId) {
		this.props.dispatch(addWhereabouts(location, activity, this.props.userId));
	}

	render() {
		return (
	        <div className="user-whereabouts-update">
	        	<header>
		            <h3>Update Your Whereabouts</h3>
	            </header>
	            <UserWhereaboutsForm addWhereabouts={(location, activity, userId) => this.addWhereabouts(location, activity, userId)} userId={this.props.userId} />
	        </div>
		);
	}
};

export default connect()(UserWhereaboutsUpdate);