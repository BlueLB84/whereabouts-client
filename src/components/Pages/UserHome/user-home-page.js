import React from 'react';
import {Link} from 'react-router-dom';
import TitleCard from '../../Headers/TitleCard/title-card';
import TeamMotto from '../../Team/TeamMotto/team-motto';
import UserStatus from '../../User/UserStatus/user-status';
import Bulletin from '../../Bulletin/bulletin';
import './user-home-page.css';

export default function UserHome(props) {
    return (
        <div className="user-home-page">
        	<header role="banner">
            	<TitleCard title='Your Team Name' />
            	<TeamMotto motto='Your team motto!' />
            </header>
            <main>
            	<h3>Team {props.teamName} Whereabouts:</h3>
            	<UserStatus usrname="Yoothee Yuser" location="desk" activity="HTML wireframes" imgSrc="https://placeimg.com/75/75/any"/>
            	<Bulletin bulletinPost="Take the day off!"/>
            </main>
            <Link to='/'>Whereabouts Home</Link>
        </div>
    );
};

UserHome.defaultProps = {

};