require('dotenv').config();
const createServer = require('./core/services/createServer');
const routes = require('./core/routes'); // ./core/routes => ./core/routes/index.js

createServer({ routes, port: 3000 });
