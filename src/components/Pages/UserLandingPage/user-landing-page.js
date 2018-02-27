import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers, fetchTeams } from '../../../actions';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamSnippet from '../../Team/TeamSnippet/team-snippet';

import './user-landing-page.css';

export class UserLandingPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers);
        this.props.dispatch(fetchTeams);
    }

    handleTeamClick(index) {
        this.props.history.push(`/team/${index}`);
    }

    render() {
        
        let body;
        if (this.state.error) {
            body = (<div className="message message-error">{this.state.error}</div>);
        } else if (this.state.loading) {
            body = (<div className="message message-default">Loading your information...</div>);
        } else {
            const userIdParam = this.props.match.params.userId;

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

const mapStateToProps = state => ({
    teams: state.teams,
    users: state.users
});

export default connect(mapStateToProps)(UserLandingPage);




