import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {API_BASE_URL} from '../../config';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamSnippet from '../../Team/TeamSnippet/team-snippet';

import './user-landing-page.css';

export class UserLandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users,
            error: null,
            loading: false
        };
    }

    componentDidMount() {
        this.loadUserTeams();
    }

    loadUserTeams() {
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${API_BASE_URL}/users`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            then(users => 
                this.setState({
                    users,
                    loading: false
                })
            )
            .catch(err => 
                this.setState({
                    error: 'Could not load user information',
                    loading: false
                })
            );
    }

    handleTeamClick(index) {
        this.props.history.push(`/team/${index}`);
    }

    render() {
        const userIdParam = parseInt(this.props.match.params.userId, 10);

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




