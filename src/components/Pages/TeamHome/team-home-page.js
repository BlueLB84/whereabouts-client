import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamMotto from '../../Team/TeamMotto/team-motto';

// import UserWhereaboutsStatus from './../UserWhereaboutsStatus/user-whereabouts-status';
// import UserImgUsrname from './../UserImgUsrname/user-img-usrname';

import UserWhereabouts from '../../User/UserWhereabouts/user-whereabouts';
import UserWhereaboutsUpdate from '../../User/UserWhereaboutsUpdate/user-whereabouts-update';

import BulletinPost from '../../Bulletin/BulletinPost/bulletin-post';
import BulletinUpdate from '../../Bulletin/BulletinUpdate/bulletin-update';

import './team-home-page.css';

export class TeamHome extends React.Component {

    render() {

        const teamIdParam = parseInt(this.props.match.params.teamId, 10);
        const currentTeam = this.props.teams[teamIdParam];
        const teamUsersProp = this.props.teams[teamIdParam].users;
        
        const teamUserIds = [];

        Object.keys(teamUsersProp).forEach(key => 
            teamUserIds.push(teamUsersProp[key].userId)
        );
        
        const teamBulletins = [];

        Object.keys(currentTeam.bulletins).forEach(key => {
            teamBulletins.push(currentTeam.bulletins[key])
        });

        const teamUsers = [];

        Object.keys(this.props.users).forEach(key => {
            if (teamUserIds.includes(parseInt(key, 10))) {
                teamUsers.push(this.props.users[key])
            }
        });
    
        const whereabouts = teamUsers.map((user, index) => (
            <li className="user-whereabouts" key={index}>
                <UserWhereabouts {...user} />
            </li>
        ));

        const bulletins = teamBulletins.map((bulletin, index) => (
            <li className="bulletin-post" key={index}>
                <BulletinPost {...bulletin} />
            </li>
        ));

        return (
            <div className="team-home-page">
                <header role="banner">
                    <TitleCard title={this.props.teams[teamIdParam].name} />
                    <TeamMotto motto={this.props.teams[teamIdParam].motto} />
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
    teams: state.whereabouts.teams,
    users: state.whereabouts.users
});

export default connect(mapStateToProps)(TeamHome);