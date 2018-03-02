import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Nav from './Nav/nav';
import TitleCard from './Headers/TitleCard/title-card';
import LandingPage from './Pages/LandingPage/landing-page';
import UserTeamLandingPageContainer from './Containers/user-team-landing-page-container';
import SignupForm from './Forms/SignupForm/signup-form';
import Footer from './Footer/footer';

import './whereabouts.css';

export default function Whereabouts() {
    return (
        <Router>
            <div className='whereabouts'>
                <Nav />
                <header>
                    <Link to='/'><TitleCard title='Whereabouts' /></Link>
                </header>
                <main>
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path='/user/:userId' component={UserTeamLandingPageContainer} />
                        <Route exact path='/team/:teamId' component={UserTeamLandingPageContainer} />
                        <Route exact path='/signin-signup' component={SignupForm} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

