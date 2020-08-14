import React from 'react';
import './index.scss';
import ae from '@Util/emoji.jsx';

const keyPairFormat = ([name, val]) => (
    <li className="statblock__listitem" key={`${name}`}>
        <div className="statblock__name">{name}</div>
        <div className="statblock__val">{val.toLocaleString()}</div>
    </li>
);

const StatBlock = ({ emoji, headerTitle, stats }) => (
    <div className="statblock">
        <h3 className="statblock__header">
            {ae(emoji.glyph, emoji.name)}
            {headerTitle}
        </h3>
        <ul className="no-bullet statblock__list">
            {stats.map(keyPairFormat)}
        </ul>
    </div>
);

export default StatBlock;
