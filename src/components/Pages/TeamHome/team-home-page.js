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
        const teamId = parseInt(this.props.match.params.teamId);
        const teamUsers = this.props.users.filter(user => user.teams.includes(teamId));   

        const teamWhereaboutsIndex = teamUsers.map(user => user.whereabouts);

        console.log(teamUsers);
    
        const whereabouts = teamUsers.map((whereabout, index) => (

            <li className="user-whereabouts" key={index}>
                <UserWhereabouts {...whereabout} />
            </li>

        ));

        const bulletins = this.props.bulletins.map((bulletin, index) => (
            <li className="bulletin-post" key={index}>
                <BulletinPost {...bulletin} />
            </li>
        ));

        return (
            <div className="team-home-page">
                <header role="banner">
                    <TitleCard title={this.props.teams[teamId].name} />
                    <TeamMotto motto={this.props.teams[teamId].motto} />
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
                            <BulletinUpdate />
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