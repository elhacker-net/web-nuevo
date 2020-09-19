import React from 'react';
import Accomplishments from '@Components/Containers/Accomplishments';
import './index.scss';

export default () => (
    <div className="intro">
        <div className="intro-container">
            <div className="intro__cell intro__cell_list">
                <Accomplishments />
            </div>
            <div className="intro__cell">
                <div className="logo" />
            </div>
        </div>
    </div>
);
