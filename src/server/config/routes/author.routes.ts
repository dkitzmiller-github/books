import { Application } from 'express';
const authorController = require('../../controllers/authors');

export function setupAuthorRoutes(app: Application) {
    app.route('/api/author').get(authorController.index);
    app.route('/api/author').post(authorController.create);
}
