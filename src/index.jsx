import React from 'react';
import ReactDOM from 'react-dom';
import Index from '@Components/Page/Index';

import '../scss/index.scss';

let container = document.getElementById('app');

ReactDOM.hydrate(<Index />, container);
