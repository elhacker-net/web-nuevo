import React from 'react';
import './index.scss';

const servicesFormat = ([name, url], index) => (
    <li className="footer-cell__listitem" key={`${name},${index}`}>
        <a className="footer-cell__link" href={url}>
            {name}
        </a>
    </li>
);

export default ({
    footerLinks: {
        services,
        main,
        contribute,
        downloads,
    },
}) => (
    <section className="footer">
        <div className="footer-container">
            <div className="footer-cell">
                <h5 className="footer-cell__header">Principal</h5>
                <ul className="footer-cell__list">
                    {main.map(servicesFormat)}
                </ul>
                <h5 className="footer-cell__header">Descargas</h5>
                <ul className="footer-cell__list">
                    {downloads.map(servicesFormat)}
                </ul>
            </div>
            <div className="footer-cell footer-cell_smaller">
                <h5 className="footer-cell__header">Servicios</h5>
                <ul className="footer-cell__list">
                    {services.map(servicesFormat)}
                </ul>
            </div>
            <div className="footer-cell footer-cell_smaller">
                <h5 className="footer-cell__header">Participa</h5>
                <ul className="footer-cell__list">
                    {contribute.map(servicesFormat)}
                </ul>
            </div>
        </div>
    </section>
);
