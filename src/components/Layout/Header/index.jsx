import React from 'react';
import './index.scss';
import Intro from '@Components/Layout/Intro';

const Navigation = ({ links }) => (
    <nav className="navbar">
        {links.map(([text, link]) => (
            <a key={`${link},${text}`} className="navbar__button" href={link}>
                {text}
            </a>
        ))}
    </nav>
);

export default ({ links }) => (
    <header className="page-header">
        <div className="navbar-container">
            <Navigation links={links} />
        </div>
        <Intro />
    </header>
);
