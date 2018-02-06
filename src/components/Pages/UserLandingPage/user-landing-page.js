import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamSnippet from '../../Team/TeamSnippet/team-snippet';

import './user-landing-page.css';

export class UserLandingPage extends React.Component {
    
    handleTeamClick(index) {
        console.log(`index is: ${index}`);
        this.props.history.push(`/user-team-home/team-${index}`);
    }

    render() {
        const teams = this.props.teams.map((team, index) => (
            <li className="user-team" key={index}>
                <TeamSnippet {...team} index={index} teamId={index} onClick={this.handleTeamClick.bind(this, index)} />
            </li>
        ));
    
        return (
            <div className="user-landing-page">
                <header role="banner">
                    <TitleCard title='Welcome Username' />
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

const mapStateToProps = state => ({
    teams: state.user.teams
});

export default connect(mapStateToProps)(UserLandingPage);