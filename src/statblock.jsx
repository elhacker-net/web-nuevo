import React from 'react';
import './statblock.scss';

const keyPairFormat = ([key, val]) => (
    <li className="statblock__listitem" key={`${key}`}>
        {`${key}: ${val}`}
    </li>
);

const StatBlock = ({ headerTitle, stats }) => (
    <div className="statblock">
        <h3 className="statblock__header">{headerTitle}</h3>
        <ul className="statblock__list no-bullet">
            {stats.map(keyPairFormat)}
        </ul>
    </div>
);

export default StatBlock;
