import React from 'react';
import {Link} from 'react-router-dom';
import TitleCard from './title-card';
import TeamMotto from './team-motto';
import './user-home-page.css';

export default function UserHome() {
    return (
        <div className="user-home-page">
        	<header role="banner">
            	<TitleCard title='Your Team Name' />
            	<TeamMotto motto='This is the bestest team!' />
            </header>
            <p>Welcome to the user home page!</p>
            <Link to='/'>Whereabouts Home</Link>
        </div>
    );
};

UserHome.defaultProps = {

};