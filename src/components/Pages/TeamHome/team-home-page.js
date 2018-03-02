import React from 'react';

import { Link } from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamMotto from '../../Team/TeamMotto/team-motto';

import UserWhereabouts from '../../User/UserWhereabouts/user-whereabouts';
import UserWhereaboutsUpdate from '../../User/UserWhereaboutsUpdate/user-whereabouts-update';

import BulletinPost from '../../Bulletin/BulletinPost/bulletin-post';
import BulletinUpdate from '../../Bulletin/BulletinUpdate/bulletin-update';

import './team-home-page.css';

export default class TeamHome extends React.Component {

    render() {
        let body;
        
        if (this.props.error) {
            body = (<div className="message message-error">{this.props.error}</div>);
        } else if (this.props.userLoading || this.props.teamLoading) {
            body = (<div className="message message-default">Loading your information...</div>);
        } else if (this.props.users.length && this.props.teams.length) {
            const teamIdParam = this.props.teamId;
            const currentTeam = this.props.teams.filter(team => {
                if (team.teamId === teamIdParam) {
                    return team;
                }
                return false;
            })[0];

            const teamUsers = [];

            this.props.users.map((user, index) => {
                if (currentTeam.users.includes(user.userId)) {
                    teamUsers.push(user);
                }
                return false;
            });
        
            const whereabouts = teamUsers.map((user, index) => (
                <li className="user-whereabouts" key={index}>
                    <UserWhereabouts {...user} />
                </li>
            ));

            const bulletins = currentTeam.bulletins.map((bulletin, index) => (
                <li className="bulletin-post" key={index}>
                    <BulletinPost {...bulletin} />
                </li>
            ));

            body = (
                <div className="team-home-page">
                    <header role="banner">
                        <TitleCard title={currentTeam.name} />
                        <TeamMotto motto={currentTeam.motto} />
                    </header>
                    <main>
                        
                        <div className="team-whereabouts-container">
                            <h3>Whereabouts:</h3>
                            <ul className="user-whereabouts-list">
                                {whereabouts}
                            </ul>
                        </div>
                        
                        <div className="bulletin-container">
                            <h3>Bulletins:</h3>
                            <ul className="bulletin-list">
                                {bulletins}
                            </ul>
                        </div>
                        
                        <div className="update">
                            <div className="modal modal-bulletin">
                                <BulletinUpdate teamId={teamIdParam} userId={`5a934e351a47d05005b1cf3f`} />
                            </div>
                            <div className="update">
                                <UserWhereaboutsUpdate userId={`5a934e351a47d05005b1cf3f`} />
                            </div>
                        </div>
                    
                    </main>
                    <Link to='/'>Whereabouts Home</Link>
                </div>
            );
        }
        return (
            <div className="team-home-page">
                {body}
            </div>
        );
    }
};