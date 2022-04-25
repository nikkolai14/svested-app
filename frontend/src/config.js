import { lazy } from 'react-router-guard';

const checkAuth = () => {
    return new Promise((resolve, reject) => {
        const token = window.localStorage.getItem('svested_token');
        if (token) {
            resolve(token);
        } else {
            reject(new Error('/signup'));
        }
   });
};

const config = [
    {
        path: "/signup",
        component: lazy(() => import('./layouts/Auth')),
        routes: [
            {
                path: '/signup',
                exact: true,
                component: lazy(() => import('./pages/Signup'))
            }
        ]
    },
    {
        path: "/",
        component: lazy(() => import('./layouts/Main')),
        canActivate: [checkAuth],
        routes: [
            {
                path: '/',
                exact: true,
                component: lazy(() => import('./pages/Dashboard'))
            }
        ]
    }
];

export default config;
