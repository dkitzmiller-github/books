import {Application} from 'express';
const bookController = require('../../controllers/books');

export function setupBookRoutes(app: Application) {

    console.log('setupBookRoutes');
    app.route('/api/books').get(bookController.index);
    app.route('/api/books').post(bookController.create);
    app.route('/api/books/:id').put(bookController.update);
    app.route('/api/books/:id').get(bookController.show);
    app.route('/api/books/:id').delete(bookController.destroy);
}
