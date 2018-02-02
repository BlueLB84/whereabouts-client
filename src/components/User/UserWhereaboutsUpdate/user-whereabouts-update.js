import React from 'react';
import {connect} from 'react-redux';

import UserWhereaboutsForm from '../../Forms/UserWhereaboutsForm/user-whereabouts-update-form';

import {addWhereabouts} from '../../../actions';

import './user-whereabouts-update.css';

export class UserWhereaboutsUpdate extends React.Component {
	addWhereabouts(location, activity) {
		this.props.dispatch(addWhereabouts(location, activity, this.props.whereaboutsIndex));
	}

	render() {
		return (
	        <div className="user-whereabouts-update">
	        	<header>
		            <h3>Update Your Whereabouts</h3>
	            </header>
	            <UserWhereaboutsForm addWhereabouts={(location, activity) => this.addWhereabouts(location, activity)}/>
	        </div>
		);
	}
};

export default connect()(UserWhereaboutsUpdate);