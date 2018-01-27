import React from 'react';
import TitleCard from './title-card';
import SubtitleCard from './subtitle-card';
import SignupForm from './signup-form';
import {Link} from 'react-router-dom';
import './landing-page.css';

export default function LandingPage(props) {
    return (
        <div className="landing-page">
            <header role="banner">
                <TitleCard title='Whereabouts' />
                <SubtitleCard />
            </header>
            <section>
		        <header>
		          <h3>Team Whereabouts</h3>
		        </header>
		        <p>[<em>placeholder for screenshot of team whereabouts snapshot interface</em>]</p>
		        <p>Whereabouts provides a snapshot of the location and activity of your team members.</p>
	      	</section>
		    <section>
		        <header>
		        	<h3>Team Bulletins</h3>
		        </header>
		        <p>[<em>placeholder for screenshot of team bulletin board interface</em>
		        </p>
		        <p>Pin important messages for your team.</p>
		    </section>
		    <section>
		        <header>
		        	<h3>Keep important team contact information in one place</h3>
		        </header>
		        <p>[<em>placeholder for screenshot of team contact information interface</em>]</p>
		        <p>Contact information made simple.</p>
		    </section>
		    <section>
		    	<header>
		        	<h3>Want to bring your team to Whereabouts?</h3>
		        	<Link to='/signup'>Start A New Whereabouts Team!</Link>
		        </header>
		    </section>
        </div>
    );
};

LandingPage.defaultProps = {

};