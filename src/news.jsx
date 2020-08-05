import React from 'react';
import './news.scss';

export default ({ announcements, articles }) => (
    <section className="news">
        <div className="news-container">
            <nav className="news-cell">
                <h3 className="news-cell__header">
                    <span className="emoji" role="img" aria-label="announcements">
                        {'\u{1f399} '}
                    </span>
                    Novedades
                </h3>
                <ul className="news-cell__list">
                    {announcements.map(([name, date]) => (
                        <li key={`${name}`} className="news-cell__listitem">
                            <div>
                                <span className="emoji" role="img" aria-label="link">
                                    📄&nbsp;
                                </span>
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
                    <span className="emoji" role="img" aria-label="articles">📻 </span>
                    Noticias
                </h3>
                <ul className="news-cell__list">
                    {articles.map((n) => (
                        <li key={`${n}`} className="news-cell__listitem">
                            <div>
                                <span className="emoji" role="img" aria-label="link">
                                    📄&nbsp;
                                </span>
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
