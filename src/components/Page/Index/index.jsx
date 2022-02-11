import React from 'react';
import Header from '@Components/Layout/Header';
import News from '@Components/Layout/News';
import ForumStats from '@Components/Layout/Forum';
import Footer from '@Components/Layout/Footer';
import Services from '@Components/Layout/Services';
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
    services,
} from '@Util/data.js';

const Index = () => (
    <>
        <Header links={links} />
        <News announcements={announcements} articles={articles} />
        <Services sections={services} />
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

export default Index;
