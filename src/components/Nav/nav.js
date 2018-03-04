import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import './nav.css';

export class Nav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logIn;
        let logOut;
        
        if (!this.props.loggedIn) {
            logIn = (
                <Link to="/login">Log In</Link>
            );
        }
        
        if (this.props.loggedIn) {
            logOut = (
                <p onClick={() => this.logOut()}>Log out</p>
            );
        }

        return (
            <nav>
                <div className="nav">
                    <ul>
                        <li><Link to="/">Whereabouts</Link></li>
                        <li>{logIn}</li>
                        <li>{logOut}</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);