import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import SubtitleCard from '../../Headers/SubtitleCard/subtitle-card';
import './landing-page.css';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/user/:userid" />;
	}

    return (
        <div className="landing-page">
            <header role="banner">
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
		        	<h3>New Whereabouts User?</h3>
		        	<Link to='/register'>Join Whereabouts!</Link>
		        </header>
		    </section>
        </div>
    );
};

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);