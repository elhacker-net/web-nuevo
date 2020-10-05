import React from 'react';
import Accomplishments from '@Components/Containers/Accomplishments';
import './index.scss';

export default () => (
    <div className="intro">
        <div className="intro-container">
            <div className="intro__cell">
                <img className="logo" alt="Logotipo" src="/img/logo6.png" />
                <h3 className="intro__participate">Comunidad Hispana de Informática</h3>
                <Accomplishments />
            </div>
            <div className="intro__cell">
                <img className="sketch" alt="Actividades" src="/img/sketch.png" />
            </div>
        </div>
    </div>
);
