import * as express from 'express';
import {Application} from 'express';
import {setupBookRoutes} from './config/routes/book.routes';
import {setupAuthorRoutes} from './config/routes/author.routes';
import {setupAuthorizationRoutes} from './config/routes/auth.routes';
import {setupCatchAllRoutes} from './config/routes/catch-all.routes';
const parser = require('body-parser');
const filePath = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = process.env.PORT || 8090;

const sessionConfig = {
  saveUninitialized: true,
  secret: 'SessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
};

const app = express();
console.log(`app: ${JSON.stringify(app)}`);
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(session(sessionConfig));
app.use(cookieParser('alsdufhalskudfhlkashdf'));
app.use(express.static(filePath.join(__dirname, 'dist')));

// require('../models/book');
require('./config/database');

setupAuthorizationRoutes(app);
setupAuthorRoutes(app);
setupBookRoutes(app);
setupCatchAllRoutes(app);


// app.use('/api/books', require('./config/routes/book.routes'));
// app.use('/api/authors', require('./config/routes/author.routes'));
// app.use('/api/auth', require('./config/routes/auth.routes'));
// const catchAll = require('./config/routes/catch-all.routes');
// app.use(catchAll);

app.listen(port, () => console.log(`listening on port ${ port }`));
