import { useRoutes } from 'react-router-dom';
import Index from '@Components/Page/Index';
import React from 'react';

const routes = [
    {
        path: '/',
        element: <Index />,
        name: 'Index',
    },
];

const RoutesConfig = () => {
    /* Better naming for React Development Tools Extension */
    const Routes = useRoutes(routes);
    return Routes;
};
export { routes };
export default RoutesConfig;
