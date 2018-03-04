import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../requires-login';
import {fetchUsers, fetchTeams} from '../../actions/protected-data';

import UserLandingPage from '../Pages/UserLandingPage/user-landing-page';
import TeamHomePage from '../Pages/TeamHomePage/team-home-page';

export class UserTeamLandingPageContainer extends React.Component {
	componentDidMount() {
        this.props.dispatch(fetchUsers());
        this.props.dispatch(fetchTeams());
    }

    render() {
        const paramsType = Object.keys(this.props.match.params)[0];

        let body;
        
        if (paramsType === "userId") {
            body = (<UserLandingPage users={this.props.users} teams={this.props.teams} error={this.props.error} userLoading={this.props.userLoading} teamLoading={this.props.teamLoading} userId={this.props.match.params.userId} />)
        }
        if (paramsType === "teamId") {
            body = (<TeamHomePage users={this.props.users} teams={this.props.teams} error={this.props.error} userLoading={this.props.userLoading} teamLoading={this.props.teamLoading} teamId={this.props.match.params.teamId} />)    
        }
        return (
            <div className="user-team-page-container">
                {body}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        teams: state.teams,
        users: state.users,
        userLoading: state.userLoading,
        teamLoading: state.teamLoading,
        error: state.error
    }
};

export default requiresLogin()(connect(mapStateToProps)(UserTeamLandingPageContainer));