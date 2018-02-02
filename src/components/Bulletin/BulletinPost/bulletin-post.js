import React from 'react';

import './bulletin-post.css';

export default function BulletinPost(props) {
    return (
        <div className="bulletin-post">
            {props.text}
        </div>
    );
};

BulletinPost.defaultProps = {
    text: ''
};