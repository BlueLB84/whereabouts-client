import React from 'react';

import Nav from './nav';
import TitleCard from './title-card';
import Footer from './footer';
import './whereabouts.css';

export default function Whereabouts() {
    return (
        <div className="whereabouts">
            <Nav login='Login' signup='Signup' />
            <TitleCard title='Whereabouts'/>
            <Footer login='Login' signup='Signup' />
        </div>
    );
}

