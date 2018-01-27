import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Nav from './nav';
import LandingPage from './landing-page';
import UserHome from './user-home-page';
import SignupForm from './signup-form';
import Footer from './footer';
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

