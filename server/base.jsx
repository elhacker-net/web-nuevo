import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import Index from '@Components/Page/Index';

const router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res, next) => {
    fs.readFile(path.resolve(__dirname, '..', 'dist', 'index.html'), 'utf8')
        .then((html) => {
            let render = ReactDOMServer.renderToString(
                <Index />,
            );
            res.send(html.replace('<div id="app"></div>', `<div id="app">${render}</div>`));
        }).catch(next);
});

export default router;
