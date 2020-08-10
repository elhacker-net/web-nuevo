import React from 'react';
import ae from './util/emoji.jsx';
import './toptopics.scss';

const topTopicsFormat = ({
    title,
    count,
}, index) => (
    <li key={`${title},${index}`} className="top-topics__row">
        <div className="top-topics__column top-topics__column_title">
            {count > 5 ? ae(' 💥 ', 'really hot') : ae(' 🔥 ', 'hot')}
            <a href="/#" className="link top-topics__link">
                {title}
            </a>
        </div>
        <div className="top-topics__column">
            {count}
        </div>
    </li>
);

const TopTopics = ({ topics }) => (
    <div className="top-topics">
        <h3 className="top-topics__header">
            {ae(' ☄️ ', 'hot topics')}
            Temas con más respuestas
        </h3>
        <ul className="no-bullet top-topics__list">
            {topics.map(topTopicsFormat)}
        </ul>
    </div>
);

export default TopTopics;
