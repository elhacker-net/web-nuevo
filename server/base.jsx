import { matchRoutes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import createStore from '../src/store';
import RoutesConfig, { routes } from '../src/routes';
import dataLoaders from './dataLoaders';

const router = express.Router();

router.use(express.static('public'));

const getInitialState = (url) => {
    const match = matchRoutes(routes, url);
    let result;
    if (match){
        const [first] = match;
        const { params } = first;
        const { name } = first.route;
        const dataLoader = dataLoaders[name];
        if (dataLoader){
            result = dataLoader(params);
        }
    }
    return result || {};
};

const escapeScriptTag = (str) => str
    .replaceAll('</script', '<\\/script')
    .replaceAll('<script', '<\\script')
    .replaceAll('<!--', '<\\!--');

const renderToString = (url, initialState) => {
    let store = createStore(initialState);
    return ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url}>
                <RoutesConfig />
            </StaticRouter>
        </Provider>,
    );
};

router.get('/', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'dist', 'index.html'), 'utf8')
        .then((html) => {
            let initialState = getInitialState(req.url);
            let render = renderToString(req.url, initialState);
            let stateStringified = escapeScriptTag(
                JSON.stringify(initialState),
            );
            let finalHTML = html
                .replace(
                    '<script id="initialState" type="application/json"></script>',
                    `<script id="initialState" type="application/json">${stateStringified}</script>`,
                ).replace(
                    '<div id="app"></div>',
                    `<div id="app">${render}</div>`,
                );
            res.send(finalHTML);
        }).catch((err) => {
            console.log(err);
            res.status(500).send('Something went wrong...');
        });
});

export default router;
