import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Nav from './Nav/nav';
import LandingPage from './Pages/LandingPage/landing-page';
import UserHome from './Pages/UserHome/user-home-page';
import SignupForm from './Forms/SignupForm/signup-form';
import Footer from './Footer/footer';
import './whereabouts.css';

export default function Whereabouts() {
    return (
        <Router>
            <div className='whereabouts'>
                <Nav login='Login' signup='Signup' />
                    <main>
                        <Switch>
                            <Route exact path='/' component={LandingPage} />
                            <Route exact path='/user' component={UserHome} />
                            <Route exact path='/signup' component={SignupForm} />
                        </Switch>
                    </main>
                <Footer login='Login' signup='Signup' />
            </div>
        </Router>
    );
}

