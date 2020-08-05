import React from 'react';
import Accomplishments from './accomplishments.jsx';
import './intro.scss';

export default () => (
    <div className="intro">
        <div className="intro-container">
            <Accomplishments />
            <div className="logo" />
        </div>
    </div>
);
