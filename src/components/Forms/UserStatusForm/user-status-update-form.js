import React from 'react';

import './user-status-update-form.css';

export default function UserStatusForm() {
    return (
        <div>
	        <form className='user-status-update-form'>
	            <div>
	              <label for="user-location">Location</label>
	              <input placeholder='Your new location' type="text" name='user-location' id='user-location' />
	            </div>
	            <div>
	              <label for="user-activity">Activity</label>
	              <input placeholder='Your new activity' type="text" name='user-activity' id='user-activity' />
	            </div>
	            <button type='submit'>Update Your Whereabouts!</button>
	            <button type='button'>Cancel</button>
	        </form>
        </div>
    );
};