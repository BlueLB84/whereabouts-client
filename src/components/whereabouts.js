import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken} from './../actions/auth';
import Nav from './Nav/nav';
import TitleCard from './Headers/TitleCard/title-card';
import LandingPage from './Pages/LandingPage/landing-page';
import UserTeamLandingPageContainer from './Containers/user-team-landing-page-container';
import RegistrationPage from './Pages/RegistrationPage/registration-page';
import LoginPage from './Pages/LoginPage/login-page';
import Footer from './Footer/footer';

import './whereabouts.css';

export class Whereabouts extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router>
                <div className='whereabouts'>
                    <Nav />
                    <header>
                        <TitleCard title='Whereabouts' />
                    </header>
                    <main>
                        <Switch>
                            <Route exact path='/' component={LandingPage} />
                            <Route exact path='/user/:userId' component={UserTeamLandingPageContainer} />
                            <Route exact path='/team/:teamId' component={UserTeamLandingPageContainer} />
                            <Route exact path='/register' component={RegistrationPage} />
                            <Route exact path='/login' component={LoginPage} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    } 
}


const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Whereabouts));
