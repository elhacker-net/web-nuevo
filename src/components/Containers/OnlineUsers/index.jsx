import React from 'react';
import intersperse from '@Util/intersperse.js';
import './index.scss';
import ae from '@Util/emoji.jsx';

const userFormat = ({ name, rank }) => (
    <a
        key={name}
        href="/#"
        className={`user-list__user user-list__user_rank_${rank}`}
    >
        {name}
    </a>
);

const UsersOnline = ({ data }) => {
    const { visitors, users, userList } = data;
    const hidden = Math.max(users - userList.length, 0);
    return (
        <div className="users-online">
            <h3 className="users-online__header">
                {ae(' 🖥 ', 'users')}
                Usuarios En Linea
            </h3>
            <p>{`Hay ${visitors} visitantes y ${users} usuarios${hidden ? ` (${hidden} ocultos)` : ''}:`}</p>
            <p className="user-list">
                {intersperse(userList.map(userFormat), ', ')}
            </p>
        </div>
    );
};

export default UsersOnline;
