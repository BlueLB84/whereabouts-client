import React from 'react';

import './team-motto.css';

export default function TeamMotto(props) {
    return (
        <div className="team-motto">
            <h2>{props.motto}</h2>
        </div>
    );
};

TeamMotto.defaultProps = {
	motto: 'Your team motto!'
};