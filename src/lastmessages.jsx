import React from 'react';
import './lastmessages.scss';

const topicFormat = ({
    forum,
    author,
    date,
    title,
}, index) => (
    <li key={`${title},${index}`} className="last-messages__row forumstats-cell__listitem">
        <div className="last-messages__column last-messages__column_align_right">
            [
            <a className="link last-messages__link" href="/#">{forum}</a>
            ]
        </div>
        <div className="last-messages__title">
            <a className="link last-messages__link" href="/#">{title}</a>
            &nbsp;por&nbsp;
            <a className="link last-messages__link" href="/#">{author}</a>
        </div>
        <div className="last-messages__column">
            {date}
        </div>
    </li>
);

const LastMessages = ({ messages }) => (
    <div className="last-messages">
        <h3 className="last-messages__header">Últimos Temas</h3>
        <ul className="no-bullet last-messages__list">
            {messages.map(topicFormat)}
        </ul>
    </div>
);

export default LastMessages;
