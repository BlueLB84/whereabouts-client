import React from 'react';

import './bulletin-post.css';

export default function BulletinPost(props) {
    return (
        <div className="bulletin-post">
            <p>{props.text} [{props.user}]</p>
        </div>
    );
};

BulletinPost.defaultProps = {
    text: ''
};