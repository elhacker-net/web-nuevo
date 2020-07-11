import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.jsx';

import '../scss/index.scss';

let container = document.getElementById('app');
let Root = hot(App);

ReactDOM.render(<Root />, container);
