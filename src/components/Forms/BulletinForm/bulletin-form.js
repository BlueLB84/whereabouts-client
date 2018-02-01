import React from 'react';

import './bulletin-form.css';

export default function BulletinForm() {
    return (
        <div>
	        <form className='bulletin-form'>
	            <div>
	              <label for="update-bulletin">Bulletin</label>
	              <input placeholder='Your new bulletin' type="text" name='update-bulletin' id='update-bulletin' />
	            </div>
	            <button type='submit'>Pin It!</button>
	            <button type='button'>Cancel</button>
	        </form>
        </div>
    );
};