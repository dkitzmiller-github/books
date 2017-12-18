import {Application} from 'express';
const path = require('path');

export function setupCatchAllRoutes(app: Application) {

    app.route('*').all(function (request, response) {
            const p = path.join(__dirname, '../../../dist/index.html');
            console.log(`path: ${p}`);
            response.sendFile(path.join(__dirname, '../../../dist/index.html'));
        });
}
