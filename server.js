const createServer = require("./core/services/createServer");

const route = {
  path: "/custom-path",
  content: "<h1>Welcome to /custom-path</h1>",
};

createServer({ routes: route, port: 3000 });
