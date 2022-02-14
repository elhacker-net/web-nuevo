import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import '../scss/index.scss';

let container = document.getElementById('app');
let method = container.hasChildNodes() ? 'hydrate' : 'render';

ReactDOM[method](<Router />, container);
