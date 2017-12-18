const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('.js$', 'i');
const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/bookauthor');


mongoose.connection.on('connected', (obj) => console.log(`connected to mongodb: ${obj}`));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('close', () => console.log('close'));
mongoose.connection.on('error', (e) => console.log(`mongoose error: ${e}`));

mongoose.Promise = global.Promise;

/*(
fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    const pathOfModel = path.join(modelsPath, file);
    console.log(`Path of model: ${pathOfModel}`);
    require(path.join(modelsPath, file));
  }
});
*/
