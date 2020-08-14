import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '@Components/Page/Index';

import '../scss/index.scss';

let container = document.getElementById('app');
let Root = hot(Index);

ReactDOM.render(<Root />, container);
