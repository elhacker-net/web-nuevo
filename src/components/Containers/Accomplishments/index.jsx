import React from 'react';
import './index.scss';
import ae from '@Util/emoji.jsx';

export default () => (
    <section className="list-why">
        <div className="list-why__cell">
            <ul className="list-why__list no-bullet">
                <li className="list-why__listitem">
                    {ae(' 🌍 ', 'community')}
                    Raices en la
                    <b> comunidad hispana </b>
                    por más de 20 años!
                </li>
                <li className="list-why__listitem">
                    {ae(' 📕 ', 'manuals')}
                    Tutoriales acerca de cualquier tema de
                    informática.
                </li>
                <li className="list-why__listitem">
                    {ae(' 📰 ', 'news')}
                    Noticias sobre eventos de seguridad relevantes.
                </li>
                <li className="list-why__listitem">
                    {ae(' 🧑‍🤝‍🧑 ', 'users')}
                    Más de 300,000 usuarios con los que interactuar!
                </li>
                <li className="list-why__listitem">
                    {ae(' 🔨 ', 'tools')}
                    Herramientas personalizadas para un número de actividades!
                </li>
            </ul>
        </div>
    </section>
);
