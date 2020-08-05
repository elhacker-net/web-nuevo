import React from 'react';
import Header from './header.jsx';
import Intro from './intro.jsx';
import News from './news.jsx';
import ForumStats from './forumstats.jsx';
import Footer from './footer.jsx';
import {
    links,
    announcements,
    articles,
    generalStatistics,
    topWeeklyPosters,
    lastMessages,
    onlineUsers,
    topTopics,
    footerLinks,
} from './data.js';

const App = () => (
    <>
        <Header links={links} />
        <Intro />
        <News announcements={announcements} articles={articles} />
        <ForumStats
            generalStatistics={generalStatistics}
            topWeeklyPosters={topWeeklyPosters}
            lastMessages={lastMessages}
            onlineUsers={onlineUsers}
            topTopics={topTopics}
        />
        <Footer footerLinks={footerLinks} />
    </>
);

export default App;
