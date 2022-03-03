const express = require('express');

const app = express();

const createServer = ({ routes, port = 8000 }) => {
  app.get('/', (_, res) => {
    res.send('<h1>Welcome to my API REST');
  });

  app.use('', routes);

  app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`);
};

module.exports = createServer;
