import React from 'react';

import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamSnippet from '../../Team/TeamSnippet/team-snippet';

import './user-landing-page.css';

class UserLandingPage extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleTeamClick(teamId, currentUser) {
        this.props.history.push(`/team/${teamId}`);
    }

    render() {

        let body;

        if (this.props.error) {
            body = (<div className="message message-error">{this.props.error}</div>);
        } else if (this.props.userLoading || this.props.teamLoading) {
            body = (<div className="message message-default">Loading your information...</div>);
        } else if (this.props.users.length && this.props.teams.length) {
            const userIdParam = this.props.userId;

            const currentUser = this.props.users.filter(user => 
                user.userId === userIdParam
            )[0];

            const currentUserTeams = [];
            
            this.props.teams.map((team, index) => {
                if (team.users.includes(userIdParam)) {
                    currentUserTeams.push(team);
                }
                return false;
            });

            const teams = currentUserTeams.map((team, index) => (
                <li className="user-team" key={index}>
                    <TeamSnippet {...team} index={index} teamId={team.teamId} onClick={this.handleTeamClick.bind(this, team.teamId)} />
                </li>
            ));

            const userWelcome = `Welcome ${currentUser.usrname}`;
            
            body = (
                <div>
                    <header role="banner">
                        <TitleCard title={userWelcome} />
                    </header>
                    <main>
                        <h3>Your Whereabouts Teams:</h3>
                        <div className="user-whereabouts-container">
                            <ul className="user-teams-list">
                                {teams}
                            </ul>
                        </div>
                    </main>
                    <Link to='/'>Whereabouts Home</Link>
                </div>
            );
        }

        return (
            <div className="user-landing-page">
                {body}
            </div>
        );
    }
};

export default withRouter(UserLandingPage);




