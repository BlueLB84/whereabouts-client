import React from 'react';
import {Link} from 'react-router-dom';
import TitleCard from './title-card';
import TeamMotto from './team-motto';
import UserStatus from './user-status';
import './user-home-page.css';

export default function UserHome(props) {
    return (
        <div className="user-home-page">
        	<header role="banner">
            	<TitleCard title='Your Team Name' />
            	<TeamMotto motto='This is the bestest team!' />
            </header>
            <main>
            	<h3>Team {props.teamName} Whereabouts:</h3>
            	<UserStatus usrname="Yoothee Yuser" location="desk" activity="HTML wireframes" imgSrc="https://placeimg.com/75/75/any"/>
            </main>
            <Link to='/'>Whereabouts Home</Link>
        </div>
    );
};

UserHome.defaultProps = {

};