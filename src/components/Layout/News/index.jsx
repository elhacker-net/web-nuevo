import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNews } from '@Slices/newsSlice';
import './index.scss';
import ae from '@Util/emoji.jsx';

const fetchNews = (url) => (dispatch) => {
    fetch(url)
        .then((res) => res.json())
        .then((news) => dispatch(setNews(news)));
};

export default () => {
    let { announcements, articles } = useSelector((state) => state.news);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews('/api/news'));
    }, []);

    return (
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
};
