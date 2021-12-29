import React from 'react';
import './index.scss';

let gridItem = ([section, icon], index) => (
    <div key={`${section} ${index}`} className="service-section service-grid__item">
        <img className="service-section__icon" src={icon} alt={section} />
        <div className="service-section__name">
            {section}
        </div>
    </div>
);

export default ({ sections }) => (
    <section className="services">
        <div className="services__container">
            <h2 className="services__header">
                Servicios
            </h2>
            <div className="service-grid">
                {sections.map(gridItem)}
            </div>
        </div>
    </section>
);
