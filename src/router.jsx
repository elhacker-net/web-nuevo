import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import createStore from './store';
import RoutesConfig from './routes';

const scriptTag = document.getElementById('initialState');
const initialState = scriptTag ? JSON.parse(scriptTag.innerHTML) : {};

const store = createStore(initialState);

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <RoutesConfig />
        </BrowserRouter>
    </Provider>
);

export default hot(App);
