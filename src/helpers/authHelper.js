import { store } from '../index';

export const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
        let authenticated = store.getState().auth.authenticated;
        if (authenticated) {
            next();
        }
        next.redirect('/login');
    } else if (to.meta.auth === false) {
        let authenticated = store.getState().auth.authenticated;
        if (authenticated) {
            next.redirect('/');
        }
        next();
    } else {
        next();
    }
};
