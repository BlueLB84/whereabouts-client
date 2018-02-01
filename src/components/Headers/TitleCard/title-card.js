import React from 'react';

import './title-card.css';

export default function TitleCard(props) {
    return (
        <div className="title-card">
            <h1>{props.title}</h1>
        </div>
    );
};

TitleCard.defaultProps = {
	title: 'Whereabouts'
};