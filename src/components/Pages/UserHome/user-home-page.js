import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TitleCard from '../../Headers/TitleCard/title-card';
import TeamMotto from '../../Team/TeamMotto/team-motto';

import UserWhereabouts from '../../User/UserWhereabouts/user-whereabouts';
import UserWhereaboutsUpdate from '../../User/UserWhereaboutsUpdate/user-whereabouts-update';

import BulletinPost from '../../Bulletin/BulletinPost/bulletin-post';
import BulletinUpdate from '../../Bulletin/BulletinUpdate/bulletin-update';

import './user-home-page.css';

export class UserHome extends React.Component {

    render() {
        const bulletins = this.props.bulletins.map((bulletin, index) => (
            <li className="bulletin-post" key={index}>
                <BulletinPost {...bulletin} />
            </li>
        ));

        const whereabouts = this.props.whereabouts.map((whereabout, index) => (
            <li className="user-whereabouts" key={index}>
                <UserWhereabouts {...whereabout} />
            </li>
        ));
    
        return (
            <div className="user-home-page">
                <header role="banner">
                    <TitleCard title='Your Team Name' />
                    <TeamMotto motto='Your team motto!' />
                </header>
                <main>
                    <h3>Team {this.props.teamName} Whereabouts:</h3>
                    <div className="user-whereabouts-container">
                        <ul className="user-whereabouts-list">
                            {whereabouts}
                        </ul>
                    </div>
                    
                    <div className="bulletin-container">
                        <ul className="bulletin-list">
                            {bulletins}
                        </ul>
                        <button type="button">Pin A New Bulletin</button>
                    </div>
                    
                    <div className="modal-hidden">
                        <div className="modal modal-bulletin">
                            <BulletinUpdate />
                        </div>
                        <div className="modal modal-whereabouts">
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
    whereabouts: state.whereabouts
});

export default connect(mapStateToProps)(UserHome);