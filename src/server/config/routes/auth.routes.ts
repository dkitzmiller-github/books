import {Application} from 'express';

const authController = require('../../controllers/auth');

export function setupAuthorizationRoutes(app: Application) {

    console.log('setup Authorizaton Route');
    app.route('/api/auth/login').post(authController.login);
    app.route('/api/auth/register').post(authController.register);
    app.route('/api/auth/logout').delete(authController.logout);
}
