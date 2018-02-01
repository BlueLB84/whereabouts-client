import React from 'react';
import UserStatusForm from '../../Forms/UserStatusForm/user-status-update-form';
import './user-status-update.css';

export default function UserStatusUpdate() {
    return (
        <div className="user-status-update">
        	<header>
	            <h3>Update your Whereabouts</h3>
            </header>
            <p>Let your team know where you are and what you're up to:</p>
            <UserStatusForm />
        </div>
    );
};