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
import UserLandingPage from './Pages/UserLandingPage/user-landing-page';
import UserHome from './Pages/UserHome/user-home-page';
import SignupForm from './Forms/SignupForm/signup-form';
import Footer from './Footer/footer';
import './whereabouts.css';

export default function Whereabouts() {
    return (
        <Router>
            <div className='whereabouts'>
                <Nav login='Login' signup='Signup' />
                <Link to="/"><TitleCard title='Whereabouts' /></Link>
                
                    
                        <Switch>
                            <Route exact path='/' component={LandingPage} />
                            <Route exact path='/user-landing/:userId' component={UserLandingPage} />
                            <Route exact path='/user-home/:teamId' component={UserHome} />
                            <Route exact path='/signup' component={SignupForm} />
                        </Switch>
                    
                <Footer login='Login' signup='Signup' />
            </div>
        </Router>
    );
}

