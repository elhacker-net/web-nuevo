import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.jsx';

import '../scss/index.scss';

let container = document.getElementById('app');

ReactDOM.render(<App />, container);
