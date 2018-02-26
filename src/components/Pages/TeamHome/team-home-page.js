import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamMotto from '../../Team/TeamMotto/team-motto';

import UserWhereabouts from '../../User/UserWhereabouts/user-whereabouts';
import UserWhereaboutsUpdate from '../../User/UserWhereaboutsUpdate/user-whereabouts-update';

import BulletinPost from '../../Bulletin/BulletinPost/bulletin-post';
import BulletinUpdate from '../../Bulletin/BulletinUpdate/bulletin-update';

import './team-home-page.css';

export class TeamHome extends React.Component {

    render() {
        const teamIdParam = parseInt(this.props.match.params.teamId, 10);
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

        return (
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
                            <BulletinUpdate teamId={teamIdParam} userId={0} />
                        </div>
                        <div className="update">
                            <UserWhereaboutsUpdate userId={0} />
                        </div>
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

export default connect(mapStateToProps)(TeamHome);