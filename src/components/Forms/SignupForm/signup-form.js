import React from 'react';
import {Link} from 'react-router-dom';
import TitleCard from '../../Headers/TitleCard/title-card';
import SubtitleCard from '../../Headers/SubtitleCard/subtitle-card';
import './signup-form.css';

export default function SignupForm() {
    return (
        <div>
        	<header role="banner">
            	<SubtitleCard />
            </header>
	        <section className="signup-form">
		        <header>
		        	<h3>Join Whereabouts!</h3>
		        </header>
		        <div>
			        <p>Start a new Whereabouts team! <br></br>
			        <em>or</em><br></br>
			        Enter the name of an existing team that you want to join!</p>
			        <form className='signup-form'>
			            <div>
			            	<label for="team-name">Team name</label>
			            	<input placeholder='Team Name' type="text" name='team-name' id='team-name' />
			            </div>
			            <div>
			            	<label for="first-name">First name</label>
			            	<input placeholder='First Name' type="text" name='first-name' id='first-name' />
			            </div>
			            <div>
			            	<label for="last-name">Last name</label>
			            	<input type="text" name="last-name" id='last-name' placeholder='Last Name' />
			            </div>
			            <div>
			            	<label for="email">Email</label>
			            	<input placeholder="youremail@email.com" type="email" name='email' id='email' />
			            </div>
			            <div>
			            	<label for="username">Username</label>
			            	<input placeholder="username" type="text" name='username' id='username' />
			            </div>
			            <div>
			            	<label for="password">Password</label>
			            	<input placeholder="password" type="password" name='password' id='password' />
			            </div>
			            <button type='submit'>Sign Up</button>
			            <button type='reset'>Cancel</button>
			        </form>
			    </div>
	      	</section>
	      	<Link to='/'>Whereabouts Home</Link>
        </div>
    );
};