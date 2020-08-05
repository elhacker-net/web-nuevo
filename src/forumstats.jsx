import React from 'react';
import './forumstats.scss';
import StatBlock from './statblock.jsx';
import OnlineUsers from './onlineusers.jsx';
import LastMessages from './lastmessages.jsx';
import TopTopics from './toptopics.jsx';

let propsToStats = {
    totalUsers: 'Total De Usuarios',
    totalMessages: 'Total de Mensajes',
    totalTopics: 'Total de Temas',
    totalCategories: 'Total de Categorias',
    totalForums: 'Total de Foros',
    usersOnline: 'Usuarios en linea',
    maxUsersOnlineToday: 'Máximo de Usuarios en linea hoy',
};

function translateProps(obj){
    return Object.entries(obj).map(([stat, val]) => {
        let propTranslation = propsToStats[stat];
        return [propTranslation, val];
    });
}

export default ({
    generalStatistics,
    topWeeklyPosters,
    lastMessages,
    onlineUsers,
    topTopics,
}) => {
    const translatedMap = translateProps(generalStatistics);
    return (
        <section className="forumstats">
            <div className="forumstats-container">
                <div className="forumstats-cell forumstats-cell_stats">
                    <StatBlock headerTitle="Estádisticas" stats={translatedMap} />
                </div>
                <div className="forumstats-cell forumstats-cell_weeklyPosters">
                    <StatBlock headerTitle="Top Semanal" stats={topWeeklyPosters} />
                </div>
                <div className="forumstats-cell forumstats-cell_usersOnline">
                    <OnlineUsers data={onlineUsers} />
                </div>
                <div className="forumstats-cell forumstats-cell_width_all">
                    <LastMessages messages={lastMessages} />
                </div>
                <div className="forumstats-cell forumstats-cell_width_all">
                    <TopTopics topics={topTopics} />
                </div>
            </div>
        </section>
    );
};
