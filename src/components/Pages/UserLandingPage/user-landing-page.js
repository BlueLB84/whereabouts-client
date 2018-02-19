import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamSnippet from '../../Team/TeamSnippet/team-snippet';

import './user-landing-page.css';

export class UserLandingPage extends React.Component {

    handleTeamClick(index) {
        this.props.history.push(`/team/${index}`);
    }

    render() {
        const userIdParam = parseInt(this.props.match.params.userId, 10);

        const currentUser = this.props.users.filter(user => 
            user.userId === userIdParam
        )[0];

        console.log(currentUser);

        const currentUserTeams = [];
        
        this.props.teams.map((team, index) => {
            if (team.users.includes(userIdParam)) {
                currentUserTeams.push(team);
            }
        });

        console.log(currentUserTeams);

        const teams = currentUserTeams.map((team, index) => (
            <li className="user-team" key={index}>
                <TeamSnippet {...team} index={index} teamId={team.teamId} onClick={this.handleTeamClick.bind(this, team.teamId)} />
            </li>
        ));

        const userWelcome = `Welcome ${currentUser.usrname}`;
    
        return (
            <div className="user-landing-page">
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
};

const mapStateToProps = (state, props) => ({
    teams: state.teams,
    users: state.users
});

export default connect(mapStateToProps)(UserLandingPage);




