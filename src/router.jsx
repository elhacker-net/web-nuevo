import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Index from '@Components/Page/Index';
import { hot } from 'react-hot-loader/root';

const App = () => (
    <BrowserRouter>
        <Index />
    </BrowserRouter>
);

export default hot(App);
