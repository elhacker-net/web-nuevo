import React from 'react';
import './news.scss';
import ae from './util/emoji.jsx';

export default ({ announcements, articles }) => (
    <section className="news">
        <div className="news-container">
            <nav className="news-cell">
                <h3 className="news-cell__header">
                    {ae(' \u{1f399} ', 'document') /* Microphone Emoji */}
                    Novedades
                </h3>
                <ul className="news-cell__list">
                    {announcements.map(([name, date]) => (
                        <li key={`${name}`} className="news-cell__listitem">
                            <div>
                                {ae(' 📄 ', 'document')}
                                <a className="link news-cell__link" href="#n">
                                    {`${name} -`}
                                    <small>
                                        {` (${date})`}
                                    </small>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="news-cell">
                <h3 className="news-cell__header">
                    {ae(' 📻 ', 'news')}
                    Noticias
                </h3>
                <ul className="news-cell__list">
                    {articles.map((n) => (
                        <li key={`${n}`} className="news-cell__listitem">
                            <div>
                                {ae(' 📄 ', 'document')}
                                <a className="link news-cell__link" href="#n">
                                    {n}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </section>
);
