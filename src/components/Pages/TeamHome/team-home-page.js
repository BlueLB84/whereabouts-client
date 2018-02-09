import React from 'react';
import {connect} from 'react-redux';
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
        
        const teamUsers = this.props.teams.filter(team => team.teamId === teamIdParam)[0].users;

        const teamWhereabouts = this.props.users.map(user => {
            const userIdInt = parseInt(user.userId, 10);
            const userWhereabouts = [];

            if (teamUsers.includes(userIdInt)) {
                userWhereabouts.push(user.whereabouts);
            }
            
            return userWhereabouts;
        });
    
        const whereabouts = teamWhereabouts.filter(item => item.length > 0).map((whereabout, index) => (
            <li className="user-whereabouts" key={index}>
                <UserWhereabouts {...whereabout[0]} />
            </li>
        ));

        const teamBulletins = this.props.bulletins.filter(bulletin => bulletin.team === teamIdParam);

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
                            <BulletinUpdate teamId={teamIdParam} />
                        </div>
                        <div className="update">
                            <UserWhereaboutsUpdate />
                        </div>
                    </div>
                
                </main>
                <Link to='/'>Whereabouts Home</Link>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    bulletins: state.bulletins,
    teams: state.teams,
    users: state.users
});

export default connect(mapStateToProps)(TeamHome);